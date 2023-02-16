import React from "react";
import Footer from "../components/Footer";
import Errorcontent from "../components/Errorcontent";
import Navigation from "../components/Navigation";

const Errorpage = () => {
  return (
    <div>
      {" "}
      <div className="body-content">
        <Navigation></Navigation>

        <Errorcontent></Errorcontent>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Errorpage;
