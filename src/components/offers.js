import React from "react";
import styles from './offers.scss'
//media-files
import img6 from "../images/image6.jpg";
import offer from '../images/Group.svg'

const Offers = () => {
  return (
    <div className="offer-wrapper">
      <img  src={img6} />
      <img src={offer} id='offer' alt='offer'/>
      <div className="offer-text">
        <h1>{"homemade burger"}</h1>
        <button id="offer">{"get started"}</button>
      </div>
    </div>
  );
};




export default Offers