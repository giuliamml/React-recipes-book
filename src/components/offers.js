import React from "react";
import styles from './offers.scss'
//media-files
import img5 from "../images/image5.svg";


const Offers = () => {
  return (
    <div className="offer-wrapper">
      <img src={img5} />
      <div className="offer-text">
        <h1>{"homemade burger"}</h1>
        <button id="offer">{"get started"}</button>
      </div>
    </div>
  );
};


export default Offers