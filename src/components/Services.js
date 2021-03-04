import React from "react";
import serviceStyle from "./Services.module.css";
import Fade from "react-reveal/Fade";

const Services = () => {
  return (
    <div>
      <Fade>
        <section className={serviceStyle.mainBody}>
          <div>
            <p className={serviceStyle.textName}>
              {" "}
              <i className="fa fa-arrow-right" aria-hidden="true"></i> What I Do
            </p>
            <h2 className={serviceStyle.textDesc}>
              I have a passion for creating delightful, human-centered digital
              experiences.
            </h2>
            <h1 className={serviceStyle.textWrap}>Think. Make. Solve.</h1>
          </div>
          <button className="btn">
            Contact Me <i className="fa fa-arrow-right" aria-hidden="true"></i>
          </button>
        </section>
      </Fade>
    </div>
  );
};

export default Services;
