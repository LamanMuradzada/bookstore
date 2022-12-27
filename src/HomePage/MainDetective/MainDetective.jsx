import React, { useEffect, useState } from "react";
import Title from "../../Title/Title";
import Api from "../../utils/Api";
import "../../MainStyle/mainStyle.css";
import { Link } from "react-router-dom";
const MainDetective = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Api.get("/").then((resp) => {
      // console.log(resp.data);
      setData(resp.data);
    });
  }, []);

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
                <span>${item.price}</span>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default MainDetective;