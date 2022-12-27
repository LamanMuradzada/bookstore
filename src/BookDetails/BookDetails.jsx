import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from "../utils/Api";
import "./details.css";
import Footer from '../Footer/Footer';
import Search from '../SearchForm/Search';
import "../FooterStyle/style.css"

const BookDetails = () => {
  const {id} = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    Api.get("/").then((resp) => {
      console.log(resp.data);
      const newBook = resp.data.find((item => item.id === parseInt(id)));
      console.log(newBook)
      setBook(newBook);
    })
  }, [id])

  return (
    <>
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
              <p><span>Price: </span>${book.price}</p>

              </div>
            </div>
            </>
            
          }
        </div>
        <Footer className="all-footer"/>
    </>
  )
}

export default BookDetails