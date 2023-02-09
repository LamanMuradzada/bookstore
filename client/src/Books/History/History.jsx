import { React, useState, useEffect } from "react";
import Api from "../../utils/Api";
// import "../books.css";
import "../../MainStyle/mainStyle.css";
import Navbar from "../../components/Navbar";
import Search from "../../SearchForm/Search";
import Footer from "../../Footer/Footer";
import { Link } from "react-router-dom";
import icon from '../../Cart-icons/icons';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const History = () => {
  const notifyError = () => toast.error("Book has been already added!");
  const notifySuccess = () => toast.success("Book added to the basket!");
  const [history, setHistory] = useState([]);



  useEffect(() => {
    Api.get("/").then((resp) => {
      setHistory(resp.data);
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
    <Navbar />
      <Search />
      <div className="title">
        <h5>History</h5>
        <div className="line"></div>
      </div>                                                 
      <div className="cards">
        {history.filter((book) => book.genre === "History").map((item) => (
          <div key={item.id} className="card-wrapper">
            <div className="card-container">
              <Link
                to={`/book/${item.id}`} key={item.id}>
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

export default History;
