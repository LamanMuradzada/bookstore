import React from 'react';
import './contact.css';
import icons from '../../Footer/FooterIcon/Icons';
import Footer from '../../Footer/Footer';


const Contact = () => {
  return (
    <>

    <div className='contact-container'>
      <p>Contact Us</p>
      <div className="contact-wrapper">
        <div className="our-info">
        <div className="info">
          <p>Phone: (+994) 50-000-00-00</p>
          <p>IG: @fifteennbook</p>
          <p>E-mail: fifteenbook@gmail.com</p>
        </div>
        <div className="icons">
          {icons.map(icon =>(
            <li>{icon.icon}</li>
          ))}
        </div>
        </div>
        <div className="form">
          <form action="" >
            <label htmlFor="">Name</label>
            <input type="text" required/>
            <label htmlFor="">E-mail</label>
            <input type="text" required/>
            <label htmlFor="">Text</label>
            <textarea name="" id="" cols="30" rows="10" required></textarea>
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Contact