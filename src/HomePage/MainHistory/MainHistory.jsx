import React, { useEffect, useState } from "react";
import Title from "../../Title/Title";
import "../../MainStyle/mainStyle.css";
import Api from "../../utils/Api";
import { Link } from "react-router-dom";
import icon from "../../Cart-icons/icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainHistory = () => {
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
        to={"/history"}
        style={{ textDecoration: "none", color: "black" }}
      >
        <Title content={"History"} />
      </Link>
      <div className="cards">
        {data.filter((book) => book.genre === "History").slice(7, 12).map((item) => (
          <div key={item.id} className="card-wrapper">
            <div className="card-container">
              <Link to={`/book/${item.id}`} key={item.id}>
                <img src={item.image} alt="book's pic" />
              </Link>
              <h3>{item.name}</h3>
              <p>{item.author}</p>
              <div className="pr-bas">
                <div className="price-cart">
                  <span>${item.price}</span>
                  {icon.map((icon) => (
                    <div
                      key={icon.key}
                      id="cart-icon"
                      onClick={() => {
                        addCart(item.id);
                      }}
                    >
                      {icon.icon}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
        <ToastContainer />
      </div>
    </>
  );
};

export default MainHistory;
