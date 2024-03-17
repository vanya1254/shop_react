import React from "react";
import { Link } from "react-router-dom";

import { Sencation, Items } from "../";

export const Products = ({ products }) => {
  return (
    <div className="products center">
      <Sencation />
      <Items items={products} />
      <Link to="/catalog">
        <button className="browse-all">Browse All Product</button>
      </Link>
    </div>
  );
};
