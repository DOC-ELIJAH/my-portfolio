import React from "react";
import bodyStyle from "./IntroBody.module.css";

const IntroBody = () => {
  return (
    <section className={bodyStyle.mainBody}>
      <div>
        <p className={bodyStyle.textName}>
          {" "}
          <i className="fa fa-arrow-right" aria-hidden="true"></i> Hope Anthony
        </p>
        <h1 className={bodyStyle.textWrap}>
          Hello, my name's Hope. I'm a Web Developer.
        </h1>
      </div>
      <div className={bodyStyle.borderWrap}>
        <div className={bodyStyle.module}> </div>
      </div>
    </section>
  );
};

export default IntroBody;
