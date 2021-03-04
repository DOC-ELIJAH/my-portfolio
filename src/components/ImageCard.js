import React from "react";
import ImageItem from "./ImageItem";
import cardStyle from "./ImageItem.module.css";
import rwb from "../assets/rwb_design.png";
import reactLogo from "../assets/react-logo.png";
import hashnode from "../assets/hashnode.png";

const ImageCard = () => {
  const imgArr = [
    {
      id: 1,
      imgUrl: rwb,
      heading: "Responsive Web Design",
      desc:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptate, voluptates nihil minus voluptatibus quod. Nisi eius error enim delectus facilis suscipit cum possimus illo aut laboriosam, eveniet deserunt accusamus.",
    },
    {
      id: 2,
      imgUrl: reactLogo,
      heading: "React JS",
      desc:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptate, voluptates nihil minus voluptatibus quod. Nisi eius error enim delectus facilis suscipit cum possimus illo aut laboriosam, eveniet deserunt accusamus.",
    },
    {
      id: 3,
      imgUrl: hashnode,
      heading: "Technical Writing",
      desc:
        " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptate, voluptates nihil minus voluptatibus quod. Nisi eius error enim delectus facilis suscipit cum possimus illo aut laboriosam, eveniet deserunt accusamus.",
    },
  ];
  // return imgArr.map((item) => {
  //   <ImageItem
  //     key={item.id}
  //     imgUrl={item.imgUrl}
  //     heading={item.heading}
  //     desc={item.desc}
  //   />;
  // });

  return (
    <section>
      <div className={cardStyle.cardGrid}>
        {imgArr.map((item) => (
          <ImageItem
            key={item.id}
            heading={item.heading}
            imgUrl={item.imgUrl}
            desc={item.desc}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageCard;
