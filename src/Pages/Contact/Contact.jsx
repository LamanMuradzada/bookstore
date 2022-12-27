import React from "react";
import "./contact.css";
import Footer from "../../Footer/Footer";
import image from "./image/contact2.jpg";
import info from "./ContactData/info";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="header">
          <div className="header-text">
            <h3>Get in touch</h3>
            <img src={image} alt="" />
            <p>
              Use our contact form for all information requests or <br />{" "}
              contact us directly using the contact information below.
            </p>
          </div>
          <div className="form">
            <form action="">
              <label htmlFor="">Name</label>
              <input type="text" required />
              <label htmlFor="">E-mail</label>
              <input type="email" required />
              <label htmlFor="">Text</label>
              <textarea name="" id="" cols="30" rows="10" required></textarea>
              <button>Send</button>
            </form>
          </div>
        </div>

        <div className="contact-footer">
          {info.map((icon) => (
            <div className="contact-info">
              <div className="icon">{icon.icon}</div>
              <div className="text">
                <h4>{icon.heading}</h4>
                <p>{icon.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div></div>
      <Footer className="all-footer" />
    </>
  );
};

export default Contact;
