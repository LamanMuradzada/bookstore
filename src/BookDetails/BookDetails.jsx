import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from "../utils/Api";
import "./details.css";
import Navbar from "../components/Navbar";
import Footer from '../Footer/Footer';
import Search from '../SearchForm/Search';
import "../FooterStyle/style.css";
import icon from '../Cart-icons/icons';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const BookDetails = () => {
  const notifyError = () => toast.error("Book has been already added!");
  const notifySuccess = () => toast.success("Book added to the basket!");
  const {id} = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    Api.get("/").then((resp) => {
      console.log(resp.data);
      const newBook = resp.data.find((item => item.id === parseInt(id)));
      console.log(newBook)
      setBook(newBook);
    })
  }, [id]);

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
        <div className="details">
          {
            <>
            <div className="book-image">
              <p>{book.name}</p>
              <img src={book.image} alt={book.name} />
            </div>

            <div className="book-info">
              <div className="book-wrapper">
              <p><span>Author: </span>{book.author}</p>
              <p><span>Genre: </span>{book.genre}</p>
              <div className="cart-price">
                   <p><span>Price: </span>${book.price}</p>
                    {icon.map(icon =>(
                      <div key={icon.key} className="icon-cart" onClick={() =>{addCart(book.id)}}>
                        {icon.icon}
                      </div>
                    ))}
                </div>

              </div>
            </div>
            </>
            
          }
          <ToastContainer />
        </div>
        <Footer className="all-footer"/>
    </>
  )
}

export default BookDetails