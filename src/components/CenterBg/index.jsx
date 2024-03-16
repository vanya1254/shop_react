import React from "react";

import manImage from "../../assets/img/man.png";

export const CenterBg = () => {
  return (
    <div className="center bg">
      <div className="brand">
        <img src={manImage} alt="model" />
        <article className="content">
          <h1 className="title">The brand</h1>
          <h2 className="subtitle">
            of&nbsp;luxerious <span className="mark">fashion</span>
          </h2>
        </article>
      </div>
    </div>
  );
};
