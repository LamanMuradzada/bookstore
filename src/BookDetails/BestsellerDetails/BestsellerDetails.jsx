import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Api from "../../utils/Api";
import "../details.css";
import Search from "../../SearchForm/Search";
import Footer from "../../Footer/Footer";
import '../../FooterStyle/style.css';

const BestsellerDetails = () => {
    const {id} = useParams();
    const [bestseller, setBestseller] = useState({});
  
    useEffect(() => {
      Api.get("/api/bestsellers").then((resp) => {
        console.log(resp.data);
        const newBestseller = resp.data.find((item => item.id === parseInt(id)));
        console.log(newBestseller)
        setBestseller(newBestseller);
      })
    }, [id])
  
    return (
      <>
      <Search />
          <div className="details">
            {
              <>
              <div className="book-image">
                <p>{bestseller.name}</p>
                <img src={bestseller.image} alt={bestseller.name} />
              </div>
  
              <div className="book-info">
                <div className="book-wrapper">
                <p><span>Author: </span>{bestseller.author}</p>
                <p><span>Genre: </span>{bestseller.genre}</p>
                <p><span>Price: </span>${bestseller.price}</p>
                </div>
              </div>
              </>
              
            }
          </div>
          <Footer className="all-footer" />
      </>
    )
}

export default BestsellerDetails