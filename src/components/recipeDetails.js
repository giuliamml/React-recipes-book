import React, { useEffect, useState } from "react";
import ingredientsBackground from "../images/ingredients.jpg";
import { useHistory } from "react-router-dom";
import time from "../images/time.svg";
import tools from "../images/tools.svg";
import apple from "../images/apple.svg";
import CartCount from "./cartCount";

const RecipeDetails = (props) => {
  console.log(props);

  let id = props.id;
  console.log(id)
  let localStorage = window.localStorage;

  const [recipe, setRecipe] = useState({});
  const [ingredients, setIngredients] = useState([]);

  const getRecipe = async () => {
    let response = await fetch(`http://localhost:3001/recipes/${id}`);
    let data = await response.json();
    setRecipe(data);
    setIngredients([...ingredients, ...data.ingredients]);
  };



  const handleClick = () => {
    let value = localStorage.getItem(id);
    if (!value) {
      localStorage.setItem(id, 1);
    } else {
      localStorage.setItem(id, parseInt(value) + 1);
    }
  };

  useEffect(() => {
    getRecipe();
  }, []);

  return (
    <div>
      <div className="recipe-details-wrapper">
        <div className="recipe-details">
          <div className="recipe-text">
            <ul>
              <li>
                {" "}
                <img src={time} alt="time" />
                <p>{recipe.readyInMinutes} minutes</p>
              </li>
              <li>
                <img src={tools} alt="time" />
                <p>{recipe.servings} servings</p>
              </li>
              <li>
                <img src={apple} alt="time" />
                <p>{recipe.calories} cals/serving</p>
              </li>
              <li>
                <p>{recipe.description}</p>
                <p>{recipe.title}</p>
              </li>
            </ul>

            <button onClick={handleClick}>add to basket</button>
          </div>
          <div className="recipe-img">
            <img src={recipe.image} alt="recipe-img" />
          </div>
        </div>
        <div className="recipe-ingredients">
          <div className="ingredients-heading">
            <h3>ingredients</h3>
          </div>
          <ul>
            {ingredients.map((ingredient) => (
              <li>{ingredient}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
