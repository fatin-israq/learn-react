import React from "react";
import Food from "./Food";
import { use } from "react";
import "./Foods.css";

const Foods = ({ foods_promise }) => {
  const data = use(foods_promise);
  const foods = data.meals;
  console.log(foods);

  return (
    <div className="foods-container">
      <h3 className="foods-title">Total Items: {foods.length}</h3>
      <div className="foods-grid">
        {foods.map((food) => (
          <Food food={food} key={food.idMeal}></Food>
        ))}
      </div>
    </div>
  );
};

export default Foods;
