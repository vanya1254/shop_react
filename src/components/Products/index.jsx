import React from "react";
import { Link } from "react-router-dom";

import { Sencation, Items } from "../";

export const Products = () => {
  return (
    <div className="products center">
      <Sencation />
      <Items />
      <Link to="/catalog">
        <button className="browse-all">Browse All Product</button>
      </Link>
    </div>
  );
};
