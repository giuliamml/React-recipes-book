import React from "react";
import styles from './footer.scss'

const Footer = () => {
  return (
    
    <div className="footer">
      <ul id="categories">
        <li>{"Categories"}</li>
        <li>{"About us"}</li>
        <li>{"Testimonial"}</li>
        <li>{"Contact"}</li>
        <li>{"Journal"}</li>
        <li>{"Privacy Policy"}</li>
      </ul>
      <ul id="partners">
        <li>{"Partners"}</li>
        <li>{"Support"}</li>
        <li>{"Shipping & Returns"}</li>
        <li>{"Size Guide"}</li>
        <li>{"Product Care"}</li>
      </ul>
      <ul id="contacts">
        <li>{"Contact Us"}</li>
        <li>{"26A Pagoda St, TANGS, Singapore, 058187"}</li>
        <li>{"+65 62215462"}</li>
      </ul>
      <ul id="socials">
        <li>{"Follow Us"}</li>
        <li>{"facebook"}</li>
        <li>{"instagram"}</li>
        <li>{"twitter"}</li>
        <li>{"whatsapp"}</li>
      </ul>
    </div>
  );
};


export default Footer;