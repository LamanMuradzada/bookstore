import { React, useState, useEffect } from "react";
import Api from "../../utils/Api";
// import "../books.css";
import "../../MainStyle/mainStyle.css";
import Search from "../../SearchForm/Search";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import icon from '../../Cart-icons/icons';

const Novel = () => {
  const [novel, setNovel] = useState([]);

  useEffect(() => {
    Api.get("/").then((resp) => {
      setNovel(resp.data);
    });
  }, []);

  const addCart = (id) => {
    Api.post(`/api/basketproduct/${id}`, id).then(() => {});
  };
  return (
    <>
      <Search />
      <div className="title">
        <h5>Novel</h5>
        <div className="line"></div>
      </div>
      <div className="cards">
        {novel
          .filter((items) => items.genre === "Novel")
          .map((item) => (
            <div key={item.id} className="card-wrapper">
              <div className="card-container">
                <Link to={`/book/${item.id}`} key={item.id}>
                  <img src={item.image} alt="" />
                </Link>
                <h3>{item.name}</h3>
                <p>{item.author}</p>
                <div className="price-cart">
                <span>${item.price}</span>
                 {icon.map(icon =>(
                  <div key={icon.key} id="cart-icon" onClick={() =>{addCart(item.id)}}>{icon.icon}</div>
                 ))}
                </div>
              </div>
            </div>
          ))}
      </div>
      <Footer />
    </>
  );
};

export default Novel;
