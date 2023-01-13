import React, { useEffect, useState } from "react";
import Title from "../../Title/Title";
import Api from "../../utils/Api";
import "../../MainStyle/mainStyle.css";
import { Link } from "react-router-dom";
import icon from '../../Cart-icons/icons';


const MainDetective = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Api.get("/").then((resp) => {
      setData(resp.data);
    });
  }, []);

  const addCart = (id) => {
    Api.post(`/api/basketproduct/${id}`, id).then(() => {});
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
      </div>
    </>
  );
};

export default MainDetective;
