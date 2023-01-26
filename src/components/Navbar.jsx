import React from 'react';
import "./Navbar.css";
import Logo from "./logo.jpg";
import menus from './menus';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <>
    <div className='nav'>
      <Link to={"/"} className={"tohome"}>
        <div className='logo'>
          <img src={Logo} alt="logo" title='Fifteen Book'/>
           <h1>Fifteen Book</h1>
        </div> 
        </Link>
        <ul>
            {menus.map(menu =>(
              <>   
                <Link to={ "/" + menu.key} className="pages" key={menu.key}>{menu.heading}</Link>
                <Link to={"/basket"} style={{color: "rgb(68, 67, 67)"}}><div className='basket-icon' title='Go to basket'>{menu.icon}</div> </Link>
              </>
               
               ))
              }
        </ul>
    </div>
   </>
  )
}

export default Navbar