import React, { useState, useEffect } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const getData = async () => {
    let response = await fetch("http://localhost:3001/recipes");
    let data = await response.json();
    console.log(data)
    setRecipes([...recipes, ...data]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>Explore our menu</h1>
      <p>
        choose from an ever changing mix of meat, fish, Beyond Meat, WW
        Approved, Diabetes Friendly recipes and health-conscious offerings{" "}
      </p>
      {recipes.map((recipe) => {
        return (
          <div className="recipe-wrapper">
            <img src={recipe.image} alt="recipe-img" />
            <li>{recipe.title}</li>
          </div>
        );
      })}
    </div>
  );
};

export default Recipes;
