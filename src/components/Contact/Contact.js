import React from "react";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <h2 className="contact-desc">contacts -</h2>
      <h2 style={{ textTransform: "uppercase", marginTop: "2rem" }}>
        woohoo! see who found me
      </h2>
      <div className="contact-deets">
        <div>
          <h2>phone</h2>
          <p>+234-8137467696</p>
        </div>
        <div>
          <h2>email</h2>
          <p>hopelijah98@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
