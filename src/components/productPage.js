import React from "react";
import styles from "./recipeDetails.scss";
//components
import Footer from "./footer";
import Offers from "./offers";
import RecipeDetails from "./recipeDetails";
import background from "../images/background-nav.jpg";

const ProductPage = ({id, cart, setCart}) => {
  // console.log(props);
  // let id = props.match.params.id;
  // let x = {cart, setCart}
  // console.log(x)
  
  let props = {id, cart, setCart}

  console.log(props)

  return (
    <div className="PDP-wrapper">
      <img src={background} alt="background" />
      <RecipeDetails id={props.id} props={props}/>
      <Offers />
      <Footer />
    </div>
  );
};


export default ProductPage;
