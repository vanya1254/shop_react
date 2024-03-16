import React from "react";
import { Link } from "react-router-dom";

export const TopHead = () => {
  return (
    <section className="top-head">
      <h2 className="top-head-title">New Arrivals</h2>
      <nav aria-label="breadcrumb">
        <ol className="top-head-breadcrumb">
          <li className="top-head-breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="top-head-breadcrumb-item">
            <Link to="/catalog">Men</Link>
          </li>
          <li className="top-head-breadcrumb-item active" aria-current="page">
            New Arrivals
          </li>
        </ol>
      </nav>
    </section>
  );
};
