import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";
import "./Home.css";
import bannerImg from "./home-image copy.jpeg";

const Home = ({ locationArray }) => {
  return (
    <div>
      <div className="body-content">
        <Navigation></Navigation>
        <div className="baner">
          <img src={bannerImg} alt=""></img>
          <h1>Chez vous, partout et ailleurs</h1>
        </div>
        <Cards locationArray={locationArray}></Cards>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
