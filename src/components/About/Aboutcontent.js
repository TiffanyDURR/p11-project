import React, { useState } from "react";

function DropDown(props) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fiabilite">
      <div
        className="title"
        onClick={() => {
          setIsOpen((prevState) => {
            return !prevState;
          });
        }}
      >
        <span>{props.title}</span>
        <button className="fas fa-chevron-down"></button>
      </div>
      {isOpen && <div className="content">{props.content}</div>}
    </div>
  );
}

const Aboutcontent = () => {
  return (
    <div className="about-content">
      <DropDown
        title="Fiabilité"
        content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les
      photos sont conformes aux logements, et toutes les informations sont
      régulièrement vérifiées par nos équipes."
      ></DropDown>

      <DropDown
        title="Respect"
        content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
      ></DropDown>

      <DropDown
        title="Service"
        content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
      ></DropDown>

      <DropDown
        title="Sécurité"
        content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
      ></DropDown>
    </div>
  );
};

export default Aboutcontent;
