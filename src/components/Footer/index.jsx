import React from "react";

import icon1 from "../../assets/img/icon1.svg";
import icon2 from "../../assets/img/icon2.svg";
import icon3 from "../../assets/img/icon3.svg";
import icon4 from "../../assets/img/icon4.svg";

export const Footer = () => {
  const icons = [
    // { img: icon1, imgAlt: "facebook" },
    // { img: icon2, imgAlt: "instagram" },
    { img: icon3, imgAlt: "painterest" },
    // { img: icon4, imgAlt: "twitter" },
  ];

  return (
    <footer className="center">
      <p className="footer-content">
        &copy;&nbsp;2021 Brand All Rights Reserved.
      </p>
      <div className="icons">
        {icons.map((icon, i) => (
          <div key={i} className="icon-block">
            <img src={icon.img} alt={icon.imgAlt} className="icon" />
          </div>
        ))}
      </div>
    </footer>
  );
};
