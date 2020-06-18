import React, { useEffect, useState } from "react";
import ingredientsBackground from "../images/ingredients.svg";
import time from "../images/time.svg";
import tools from "../images/tools.svg";
import apple from "../images/apple.svg";

const RecipeDetails = (props) => {
  let id = props.id;
  let localStorage = window.localStorage;

  const [recipe, setRecipe] = useState({});
  const [cart, setCart] = useState({ stateComponent: false });

  const getRecipe = async () => {
    let response = await fetch(`http://localhost:3001/recipes/${id}`);
    let data = await response.json();
    console.log(data);
    setRecipe(data);
  };

  const handleClick = (event) => {
    event.preventDefault();

    let value = localStorage.getItem(id);
    if (!value) {
      localStorage.setItem(id, 1);
    } else {
      localStorage.setItem(id, parseInt(value) + 1);
    }
    setCart({ stateComponent: true });
  };

  const CartCount = () => {
    return (
      <div className='cart-count'>
       <p>{localStorage.length}</p>
      </div>
    );
  };

  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <div className="recipe-details-wrapper">
      {cart.stateComponent ? <CartCount /> : null}
      <div className="recipe-details">
        <div className="recipe-text">
          <img src={time} alt="time" />
          <p>{recipe.readyInMinutes} minutes</p>
          <img src={tools} alt="time" />
          <p>{recipe.servings} servings</p>
          <img src={apple} alt="time" />
          <p>{recipe.calories} cals/serving</p>
          <p>{recipe.description}</p>
          <p>{recipe.title}</p>
          <button onClick={handleClick}>add to basket</button>
        </div>
        <div className="recipe-img">
          <img src={recipe.image} alt="recipe-img" />
        </div>
      </div>
      {/* <img src={ingredientsBackground} alt="background" /> */}
    </div>
  );
};

export default RecipeDetails;
