import React from "react";
import Aboutcontent from "../components/About/Aboutcontent";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer/Footer";
import "./About.css";

const About = () => {
  return (
    <div>
      <div className="body-content">
        <Navigation></Navigation>
        <div className="baner">
          <img src="assets/about-image.jpeg" alt=""></img>
        </div>
        <Aboutcontent></Aboutcontent>{" "}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
