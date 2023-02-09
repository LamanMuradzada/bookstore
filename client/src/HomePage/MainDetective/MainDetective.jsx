import React, { useEffect, useState } from "react";
import Title from "../../Title/Title";
import Api from "../../utils/Api";
import "../../MainStyle/mainStyle.css";
import { Link } from "react-router-dom";
import icon from '../../Cart-icons/icons';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainDetective = () => {
  const notifyError = () => toast.error("Book has been already added!");
  const notifySuccess = () => toast.success("Book added to the basket!");
  const [data, setData] = useState([]);

  useEffect(() => {
    Api.get("/").then((resp) => {
      setData(resp.data);
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
      <Link
        to={"/detective"}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Title content={"Detective"} />
      </Link>

      <div className="cards">
        {data
          .filter((items) => items.genre === "Detective")
          .slice(7, 12)
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
                  <div key={icon.key} id="cart-icon" onClick={() =>{ addCart(item.id)}}>{icon.icon}</div>
                 ))}
                </div>
              </div>
            </div>
          ))}
          <ToastContainer />
      </div>
    </>
  );
};

export default MainDetective;
