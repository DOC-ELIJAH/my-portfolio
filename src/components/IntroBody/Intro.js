import React from "react";
import "./Intro.css";
import female from "../../assets/femaledev.svg";

const Intro = () => {
  return (
    <>
      <section className="intro-container">
        <div>
          <h2 className="h2Intro">know me in one div</h2>
          <div className="intro-box">
            <h2>Hi there, I'm Hope</h2>
            <p className="intro">
              {" "}
              I am a frontend engineer. I have passion for creating delightful,
              human-centered digital experiences.{" "}
            </p>
            <p className="think">think.make.solve.learn</p>
            <button className="ctaButton">hire me </button>
          </div>
        </div>
        <div className="intro-image">
          <img src={female} alt="female developer svg" />
        </div>
      </section>
    </>
  );
};

export default Intro;
