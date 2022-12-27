import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./result.css";

import Api from "../../utils/Api";
import Footer from "../../Footer/Footer";
import Search from "../Search";

const SearchResult = () => {
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

  return (
    <>
      <Search />
      <div className={books.newFilter?.length > 1 ? "all-result" : "one-result"}>
      {(books ? (books.newFilter ? books.newFilter : []) : []).map((book) => (
          <div className="result-wrapper" key={book.id}>
            <div className="result-container">
              <img src={book?.image} alt="" />
              <p id="book-name">{book?.name}</p>
              <div className="au-pr">
              <p>{book?.author}</p>
              <p>${book?.price}</p>
              </div>
            </div>
        </div>
      ))}
      </div>
      <Footer className="all-footer"/>
    </>
  );
};

export default SearchResult;
