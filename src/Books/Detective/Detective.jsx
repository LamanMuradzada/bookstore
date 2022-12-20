import { React, useState, useEffect } from "react";
import Api from "../../utils/Api";
// import "../books.css";
import "../../MainStyle/mainStyle.css";
import Search from "../../SearchForm/Search";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";

const Detective = () => {
  const [detective, setDetective] = useState([]);

  useEffect(() => {
    Api.get("/").then((resp) => {
      console.log(resp.data);
      setDetective(resp.data);
    });
  }, []);
  return (
    <>
      <Search />
      <div className="title">
        <h5>Detective</h5>
        <div className="line"></div>
      </div>
      <div className="cards">
        {detective
          .filter((items) => items.genre === "Detective")
          .map((item) => (
            <Link
              to={`/book/${item.id}`}
              style={{ textDecoration: "none", color: "black" }} key={item.id}
            >
              <div key={item.id} className="card-wrapper">
                <div className="card-container">
                  <img src={item.image} alt="" />
                  <h3>{item.name}</h3>
                  <p>{item.author}</p>
                  <span>${item.price}</span>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <Footer />
    </>
  );
};

export default Detective;
