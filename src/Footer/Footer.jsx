import React from "react";
import icons from "./FooterIcon/Icons";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <span className="text">
          <span class="copy-right">&copy;</span>
          2022 <strong>Fifteen Book. </strong>
          All Rights Reserved.
        </span>
        <ul>
          {icons.map((icon) => (
            <li id="icons">{icon.icon}</li>
          ))}
        </ul>
      </footer>
    </>
  );
};

export default Footer;
