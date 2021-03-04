import React from "react";
import cardStyle from "./ImageItem.module.css";
const ImageItem = ({ imgUrl, heading, desc }) => {
  return (
    <div className="card">
      <img src={imgUrl} alt="" className={cardStyle.imgUrl} />
      <h3 className={cardStyle.heading}>{heading}</h3>
      <p className={cardStyle.text}>{desc}</p>
    </div>
  );
};

export default ImageItem;
