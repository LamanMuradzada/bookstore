import React from "react";
import data from "../OptionsData/optionsData";
import "./books.css";
import Search from "../../SearchForm/Search";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";

const Books = () => {
  return (
    <>
      <Search />
      <div>
       
        <div className="book-container">
          {data.map((item) => (
            <Link to={"/" + item.key} style={{textDecoration: "none", color: "black", fontSize: "50px"}}>
            <div className="options">
              <div className="card">
                <img src={item.image} alt="genre" />
                <h4>{item.text}</h4>
              </div>
            </div>
            </Link>
          ))}
        </div>
        
      </div>
        <Footer />
    </>
  );
};

export default Books;
