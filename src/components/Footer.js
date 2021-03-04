import React from "react";
import footerStyle from "./Footer.module.css";
import twitter from "../assets/twitter.png";
import linked from "../assets/linked.png";
import google from "../assets/google.png";
import wave from "../assets/footerwave.png";

const Footer = () => {
  return (
    <footer>
      <div className={footerStyle.footerBox}>
        {/* **********************cards begins here ***************************/}
        <div className={footerStyle.cardContainer}>
          <a href="#" className={footerStyle.card}>
            Team
          </a>
          <a href="#" className={footerStyle.card}>
            Support
          </a>
          <a href="#" className={footerStyle.card}>
            Community
          </a>
          <a href="#" className={footerStyle.cards}>
            About Us
          </a>
          <a href="#" className={footerStyle.cards}>
            Contact Us
          </a>
          <a href="#" className={footerStyle.cards}>
            Developers
          </a>
          <a href="#" className={footerStyle.cards}>
            Jobs
          </a>
          <a href="#" className={footerStyle.cards}>
            {" "}
            Cookies
          </a>
          <a href="#" className={footerStyle.cards}>
            Designers
          </a>
          <a href="#" className={footerStyle.cards}>
            Blog
          </a>
          <a href="#" className={footerStyle.cards}>
            Sitemap
          </a>
          <a href="#" className={footerStyle.cards}>
            Privacy & Terrms
          </a>
        </div>
        {/* **************card ends here********************** */}

        {/***********************circle icons ************************* */}
        <div className={footerStyle.circleGrid}>
          <div className={footerStyle.circleContainer}>
            <div className={footerStyle.circle}>
              <img src={twitter} alt="twitter page" />
            </div>
          </div>

          <div className={footerStyle.circleContainer}>
            <div className={footerStyle.circle}>
              <img src={google} alt="twitter page" />
            </div>
          </div>

          <div className={footerStyle.circleContainer}>
            <div className={footerStyle.circle}>
              <img src={linked} alt="twitter page" />
            </div>
          </div>
        </div>
        {/* **********************circl icons ends here*********************************** */}
      </div>
    </footer>
  );
};

export default Footer;
