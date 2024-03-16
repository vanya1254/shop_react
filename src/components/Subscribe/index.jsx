import React from "react";

import img from "../../assets/img/subscriber.png";

export const Subscribe = () => {
  return (
    <div className="subscribe center">
      <div className="subscribe-bg"></div>
      <div className="subscribe-left">
        <img src={img} alt="subscriber" className="subscriber" />
        <p>
          &laquo;Vestibulum quis porttitor dui! Quisque viverra nunc&nbsp;mi,{" "}
          <span>a&nbsp;pulvinar purus condimentum</span>&raquo;
        </p>
      </div>
      <article className="subscribe-right">
        <h2>Subscribe</h2>
        <p>For our newletter and promotion</p>
        <form className="email">
          <input type="email" placeholder="Enter Your Email" />
          <button type="submit">Subscribe</button>
        </form>
      </article>
    </div>
  );
};
