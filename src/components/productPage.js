import React from "react";
import styles from "./recipeDetails.scss";
//components
import Footer from "./footer";
import Offers from "./offers";
import RecipeDetails from "./recipeDetails";
import background from "../images/background-nav.jpg";

const ProductPage = (props) => {
  console.log(props);
  let id = props.id;
  
  

  return (
    <div className="PDP-wrapper">
      <img src={background} alt="background" />
      <RecipeDetails id={id}/>
      <Offers />
      <Footer />
    </div>
  );
};


export default ProductPage;
