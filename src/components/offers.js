import React from "react";
import styles from './offers.scss'
//media-files
import img6 from "../images/image6.jpg";


const Offers = () => {
  return (
    <div className="offer-wrapper">
      <img src={img6} />
      <div className="offer-text">
        <h1>{"homemade burger"}</h1>
        <button id="offer">{"get started"}</button>
      </div>
    </div>
  );
};




export default Offers