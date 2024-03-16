import React from "react";

import img1 from "../../assets/img/feature-icon1.svg";
import img2 from "../../assets/img/feature-icon2.svg";
import img3 from "../../assets/img/feature-icon3.svg";

export const Features = () => {
  const features = [
    {
      img: img1,
      imgAlt: "delivery",
      title: "Free Delivery",
      description:
        "Worldwide delivery on all. Authorit tively morph next-generation innovation with extensive models.",
    },
    {
      img: img2,
      imgAlt: "sales",
      title: "Sales & discounts",
      description:
        "Worldwide delivery on all. Authorit tively morph next-generation innovation with extensive models.",
    },
    {
      img: img3,
      imgAlt: "assurance",
      title: "Quality assurance",
      description:
        "Worldwide delivery on all. Authorit tively morph next-generation innovation with extensive models.",
    },
  ];

  return (
    <div className="feature center">
      {features.map((feature, i) => (
        <article key={i} className="feature-item">
          <img
            src={feature.img}
            alt={feature.imgAlt}
            className={`feature-icon${i + 1}`}
          />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </article>
      ))}
    </div>
  );
};
