import React from "react";
import { Link } from "react-router-dom";
import "./recipeCard.css";

const RecipeCard = ({ el }) => {
  return (
    <div>
      <div className="card-container">
        <div className="card u-clearfix">
          <div className="card-body">
            <span className="card-number card-circle subtle">01</span>
            <span className="card-author subtle">John Smith</span>
            <h2 className="card-title">{el.label}</h2>
            <span className="card-description subtle">
              Calories: {Math.ceil(el.calories)}
            </span>
            <div className="card-read">
              <Link to={`/details/${el.uri.slice(51)}`}>Read</Link>
            </div>
            <span className="card-tag card-circle subtle">C</span>
          </div>
          <img src={el.image} alt={el.label} className="card-media" />
        </div>
        <div className="card-shadow" />
      </div>
    </div>
  );
};

export default RecipeCard;