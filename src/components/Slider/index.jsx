import React from "react";

export const Slider = () => {
  const onClickBottomBtn = (index) => {
    // slideIndex = index;
    // updateSlider();
  };

  return (
    <div
      onmouseover="changeItem()"
      onmouseout="rechangeItem()"
      className="background"
    >
      <div className="slider">
        <button className="slider-arrow prev">
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
          <img
            className="slider-product-img"
            src="/img/slider/slider1.png"
            alt="product"
          />
          <img
            className="slider-product-img"
            src="/img/slider/slider2.png"
            alt="product"
            style="display: none;"
          />
          <img
            className="slider-product-img"
            src="/img/slider/slider3.png"
            alt="product"
            style="display: none;"
          />
          <img
            className="slider-product-img"
            src="/img/slider/slider4.png"
            alt="product"
            style="display: none;"
          />
          <div className="slider-indicators">
            <button
              type="button"
              onClick={() => onClickBottomBtn(0)}
              className="active"
            ></button>
            <button type="button" onclick="onClickBottomBtn(1)"></button>
            <button type="button" onclick="onClickBottomBtn(2)"></button>
            <button type="button" onclick="onClickBottomBtn(3)"></button>
          </div>
        </div>
        <button className="slider-arrow next">
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
