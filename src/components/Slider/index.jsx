import React, { useState } from "react";

import img1 from "../../assets/img/slider/slider1.png";
import img2 from "../../assets/img/slider/slider2.png";
import img3 from "../../assets/img/slider/slider3.png";
import img4 from "../../assets/img/slider/slider4.png";

export const Slider = ({ img }) => {
  const [imgs, setImgs] = useState([
    { src: img || img1, alt: "product", active: true },
    { src: img2, alt: "product", active: false },
    { src: img3, alt: "product", active: false },
    { src: img4, alt: "product", active: false },
  ]);

  const onClickNext = () => {
    const activeImg = imgs
      .map((img, i) => {
        if (img.active) {
          return i;
        }
      })
      .filter((i) => i !== undefined)[0];

    const updatedImgs = [...imgs];
    updatedImgs[activeImg].active = false;
    updatedImgs[(activeImg + 1) % imgs.length].active = true;
    setImgs(updatedImgs);
  };
  const onClickPrev = () => {
    const activeImg = imgs
      .map((img, i) => {
        if (img.active) {
          return i;
        }
      })
      .filter((i) => i !== undefined)[0];

    const updatedImgs = [...imgs];
    updatedImgs[activeImg].active = false;
    updatedImgs[(activeImg - 1 + imgs.length) % imgs.length].active = true;
    setImgs(updatedImgs);
  };

  const onClickBottomBtn = (index) => {
    const updatedImgs = imgs.map((img, i) => {
      if (i === index) {
        img.active = true;
      } else {
        img.active = false;
      }
      return img;
    });

    setImgs(updatedImgs);
  };

  const onMouseOver = () => {
    document.getElementById("move").style.transform = "translateY(+64px)";
  };

  const onMouseOut = () => {
    document.getElementById("move").style.transform = "translateY(0px)";
  };

  return (
    <div
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      className="background"
    >
      <div className="slider">
        <button className="slider-arrow prev" onClick={onClickPrev}>
          <svg
            className="slider-previous"
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="23"
            viewBox="0 0 13 23"
            fill="none"
          >
            <path
              d="M12.6998 3.7499L4.9498 11.4999L12.6998 19.2499L11.1498 22.3499L0.299805 11.4999L11.1498 0.649902L12.6998 3.7499Z"
              fill="black"
            />
          </svg>
        </button>
        <div className="slider-product">
          {imgs.map((img, i) => (
            <img
              key={i}
              className="slider-product-img"
              src={img.src}
              alt={img.alt}
              style={{ display: img.active ? "" : "none" }}
            />
          ))}
          <div className="slider-indicators">
            {imgs.map((img, i) => (
              <button
                key={i}
                type="button"
                onClick={() => onClickBottomBtn(i)}
                className={`${img.active ? "active" : ""}`}
              ></button>
            ))}
          </div>
        </div>
        <button className="slider-arrow next" onClick={onClickNext}>
          <svg
            className="slider-next"
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="23"
            viewBox="0 0 13 23"
            fill="none"
          >
            <path
              d="M0.300049 19.2499L8.05005 11.4999L0.300049 3.7499L1.85005 0.649902L12.7 11.4999L1.85005 22.3499L0.300049 19.2499Z"
              fill="black"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
