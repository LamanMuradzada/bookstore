import React, { useEffect, useState } from "react";
import Title from "../../Title/Title";
import '../../MainStyle/mainStyle.css';
import Api from "../../utils/Api";
import { Link } from "react-router-dom";
const MainBestsellers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    Api.get("/api/bestsellers").then((resp) => {
       setData(resp.data);
    }); 
  }, []);

  return (
    <>
       <Link to={"/bestsellers"} style={{textDecoration: "none", color: "black"}}>
        <Title content={"Bestsellers"} />
       </Link>
      <div className="cards">
      {data.slice(7, 12).map((item) => (
        
        <div key={item.id} className="card-wrapper">
          <div className="card-container">
            <Link to={`/bestseller/${item.id}`} key={item.id}>
             <img src={item.image} alt="book's pic" />
             </Link>
            <h3>{item.name}</h3>
            <p>{item.author}</p>
            <div className="pr-bas">
              <span>${item.price}</span>
              
            </div>
          </div>
        </div>
        
      ))}
        </div>
    </>
  );
};

export default MainBestsellers;
