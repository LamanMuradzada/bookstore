import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./result.css";
import icon from '../../Cart-icons/icons';
import Navbar from "../../components/Navbar";
import Api from "../../utils/Api";
import Footer from "../../Footer/Footer";
import Search from "../Search";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SearchResult = () => {
  const notifyError = () => toast.error("Book has been already added!");
  const notifySuccess = () => toast.success("Book added to the basket!");
  let { bookName } = useParams();

  const [books, setBooks] = useState([]);

  useEffect(() => {
    Api.get("/").then((resp) => {
      const newFilter = resp.data.filter((value) => {
        return (
          value.name.toLowerCase().includes(bookName) ||
          value.author.toLowerCase().includes(bookName)
        );
      });
      setBooks({ ...books, newFilter });
    });
  }, [bookName]);

  const addCart = (id) => {
    Api.post(`/api/basketproduct/${id}`, id).then((rsp) => {
      console.log("hhhhh", rsp);
      if (rsp.data.result === false) {
        notifyError();
      } else {
        notifySuccess();
      }
    });
  };

  return (
    <>
    <Navbar />
      <Search />
      <div className={books.newFilter?.length > 1 ? "all-result" : "one-result"}>
       {books?.newFilter?.length === 0 && <div>Book not found.</div>}
      {(books ? (books.newFilter ? books.newFilter : []) : []).map((book) => (
          <div className="result-wrapper" key={book.id}>
            <div className="result-container">
              <img src={book?.image} alt="" />
              <p id="book-name">{book?.name}</p>
              <div className="au-pr">
              <p>{book?.author}</p>
              <div className="price-cart">
                <span>${book.price}</span>
                 {icon.map(icon =>(
                  <div key={icon.key} id="basket-icon" onClick={() => {addCart(book.id)}}>{icon.icon}</div>
                 ))}
                </div>
              </div>
            </div>
        </div>
      ))}
      <ToastContainer />
      </div>
      <Footer className="all-footer"/>
    </>
  );
};

export default SearchResult;
