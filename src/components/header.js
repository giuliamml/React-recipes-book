import React from "react";
import styles from './header.scss'

//media-files
import img1 from "../images/image1.svg";


const Header = () => {
  return (
    <div className="hero-wrapper">
      {/* <img src={img1} /> */}

      <div className="hero-text">
        <h1>{"Order our top-rated recipes today!"}</h1>
        <button className="cta">{"get started"}</button>
      </div>
    </div>
  );
};


export default Header;