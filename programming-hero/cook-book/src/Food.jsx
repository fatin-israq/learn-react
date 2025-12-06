import React from "react";
import "./Food.css";

const Food = ({ food }) => {
  return (
    <div className="food-card">
      <img
        src={food.strMealThumb}
        alt={food.strMealAlternate}
        className="food-image"
      />
      <div className="food-content">
        <h2 className="food-title">{food.strMeal}</h2>
        <a
          href={food.strYoutube}
          target="_blank"
          rel="noopener noreferrer"
          className="youtube-link"
        >
          📺 Watch Recipe
        </a>
        <a
          href={food.strSource}
          target="_blank"
          rel="noopener noreferrer"
          className="recipe-link"
        >
          📖 Read Recipe
        </a>
      </div>
    </div>
  );
};

export default Food;
