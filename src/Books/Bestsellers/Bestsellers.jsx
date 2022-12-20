import { React, useState, useEffect } from "react";
import Api from "../../utils/Api";
// import "../books.css";
import "../../MainStyle/mainStyle.css";
import Search from "../../SearchForm/Search";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";

const Bestsellers = () => {
  const [bestsellers, setBestsellers] = useState([]);

  useEffect(() => {
    Api.get("/api/bestsellers").then((resp) => {
      console.log(resp.data);
      setBestsellers(resp.data);
    });
  }, []);
  return (
    <>
      <Search />
      <div className="title">
        <h5>Bestsellers</h5>
        <div className="line"></div>
      </div>
      <div className="cards">
        {bestsellers.map((item) => (
          <Link
          to={`/bestseller/${item.id}`}
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

export default Bestsellers;
