import React from "react";
import "./Footer.css";
import footerIMG from "./footer-img.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <img src={footerIMG} alt="logo Kasa"></img>
      </div>
      <span>© 2020 Kasa. All rights reserved</span>
    </footer>
  );
};

export default Footer;
