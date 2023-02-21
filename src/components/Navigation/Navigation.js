import React from "react";
import { NavLink } from "react-router-dom";
import logoIMG from "./logo-img.png";

const Navigation = () => {
  return (
    <div className="navigation">
      <nav>
        <NavLink to="/">
          <div className="logo">
            <img src={logoIMG} alt="logo Kasa"></img>
          </div>
        </NavLink>
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/about"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>A propos</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
