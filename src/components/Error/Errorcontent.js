import React from "react";
import { NavLink } from "react-router-dom";
import "./Errorcontent.css";

const Errorcontent = () => {
  return (
    <div className="error404">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <NavLink to="/">
        <span>Retourner sur la page d’accueil</span>
      </NavLink>
    </div>
  );
};

export default Errorcontent;
