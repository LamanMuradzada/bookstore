import React, { useEffect, useState } from "react";
import Title from "../Title/Title";
import "../MainStyle/mainStyle.css"
import Api from "../utils/Api";
import { Link } from "react-router-dom";
const MainBestsellers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Api.get("/api/bestsellers").then((resp) => {
      console.log(resp.data);
      setData(resp.data);
    }); 
  }, []);

  return (
    <>
       <Link to={"/bestsellers"} style={{textDecoration: "none", color: "black"}}>
        <Title content={"Bestsellers"} />
       </Link>
       <Link style={{textDecoration: "none", color: "black"}}>
      <div className="cards">
      {data.slice(7, 12).map((item) => (
        <div key={item.id} className="card-wrapper">
          <div className="card-container">
             <img src={item.image} alt="book's pic" />
            <h3>{item.name}</h3>
            <p>{item.author}</p>
            <span>${item.price}</span>
          </div>
        </div>
      ))}
        </div>
        </Link>
    </>
  );
};

export default MainBestsellers;
