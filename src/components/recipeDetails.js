import React, { useEffect, useState } from "react";
import ingredientsBackground from "../images/ingredients.svg";
import time from '../images/time.svg'
import tools from '../images/tools.svg'
import apple from '../images/apple.svg'


const RecipeDetails = (props) => {
  let id = props.id;

  const [recipe, setRecipe] = useState({});

  const getRecipe = async () => {
    let response = await fetch(`http://localhost:3001/recipes/${id}`);
    let data = await response.json();
    console.log(data);
    setRecipe(data);
  };

  useEffect(() => {
    getRecipe();
  }, []);

  console.log(recipe);
  return (
    <div className="recipe-details-wrapper">
      <div className="recipe-details">
        <div className="recipe-text">
          <img src={time} alt='time'/><p>{recipe.readyInMinutes}</p>
          <img src={tools} alt='time'/><p>{recipe.servings}</p>
          <img src={apple} alt='time'/><p>{recipe.calories}</p>
          <p>{recipe.description}</p>
          <p>{recipe.title}</p>
          <button>add to basket</button>
        </div>
        <div className="recipe-img">
          <img src={recipe.image} alt="recipe-img" />
        </div>
      </div>
      <img src={ingredientsBackground} alt="background" />
    </div>
  );
};

export default RecipeDetails;
