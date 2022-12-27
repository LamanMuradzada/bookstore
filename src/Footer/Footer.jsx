import React from "react";
import icons from "./FooterIcon/Icons";
import "./footer.css";

const Footer = ({className}) => {
  return (
    <> <div className={className}>
  <footer className="footer">
        <span className="text">
          <span className="copy-right">&copy;</span>
          2022 <strong>Fifteen Book. </strong>
          All Rights Reserved.
        </span>
        <ul>
          {icons.map((icon) => (
            <li key={icon.key} id="icons">{icon.icon}</li>
          ))}
        </ul>
      </footer>
    </div>
    </>
  );
};

export default Footer;
