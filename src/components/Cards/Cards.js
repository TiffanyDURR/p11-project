import React from "react";
import { NavLink } from "react-router-dom";
import "./Cards.css";

const Cards = ({ locationArray }) => {
  return (
    <div className="cards">
      <ul>
        {locationArray.map((card) => (
          <NavLink key={card.id} to={`article/${card.id}`}>
            <li>
              <img src={card.cover} alt={card.title}></img>
              <span>{card.title}</span>
            </li>
          </NavLink>
        ))}
      </ul>
    </div>
  );
};

export default Cards;
