import { React, useState, useEffect } from "react";
import Api from "../../utils/Api";
// import "../books.css";
import "../../MainStyle/mainStyle.css";
import Search from "../../SearchForm/Search";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import icon from '../../Cart-icons/icons';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Fantasy = () => {
  const notifyError = () => toast.error("Book has been already added!");
  const notifySuccess = () => toast.success("Book added to the basket!");
  const [fantasy, setFantasy] = useState([]);

  useEffect(() => {
    Api.get("/").then((resp) => {
      setFantasy(resp.data);
    });
  }, []);

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
      <Search />
      <div className="title">
        <h5>Fantasy</h5>
        <div className="line"></div>
      </div>
      <div className="cards">
        {fantasy
          .filter((items) => items.genre === "Fantasy")
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
          <ToastContainer />
      </div>
      <Footer />
    </>
  );
};

export default Fantasy;
