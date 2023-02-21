import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import Footer from "../../components/Footer/Footer";
import Rating from "../../components/Rating";
import "./Articledetails.css";
import DropDown from "../../components/Dropdown";

const Articledetails = ({ locationArray, isLoading }) => {
  const params = useParams();
  const userId = params.userId;
  const [current, setCurrent] = useState(0);

  const card = locationArray.find((loc) => loc.id === userId);
  if (isLoading) return null;
  if (!card) return <Navigate to="/404" />;

  const sliderData = card.pictures;
  const length = sliderData.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(sliderData) || sliderData.length <= 0) {
    return null;
  }

  let equipmentsData = card.equipments.map((equipment) => (
    <span key={equipment}>{equipment}</span>
  ));

  return (
    <div>
      <div className="body-content">
        <Navigation></Navigation>
        <div className="page-content">
          <div className="carousel">
            <button
              className="fas fa-chevron-left"
              onClick={prevSlide}
            ></button>
            <div className="pic-container">
              <img src={card.pictures[current]} alt={card.title}></img>
            </div>
            <button
              className="fas fa-chevron-right"
              onClick={nextSlide}
            ></button>
          </div>

          <div className="page-header">
            <div>
              <h1>{card.title}</h1>
              <span className="loc">{card.location}</span>
            </div>
            <div>
              <div className="author">
                <span className="nom">{card.host.name}</span>
                <span className="thumb-name">
                  <img src={card.host.picture} alt={card.title}></img>
                </span>
              </div>
            </div>
          </div>

          <div className="infos">
            <div className="tags">{card.tags[0]}</div>
            <Rating count={card.rating} />
          </div>
          <div className="section article-drpdwn">
            <DropDown title="Description" content={card.description} />
            <DropDown title="Équipements" content={equipmentsData} />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Articledetails;
