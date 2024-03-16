import React from "react";
import { Link } from "react-router-dom";

export const Pagination = () => {
  return (
    <div className="pagination">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9"
        height="14"
        viewBox="0 0 9 14"
        fill="none"
      >
        <path
          d="M8.99512 2L3.99512 7L8.99512 12L7.99512 14L0.995117 7L7.99512 0L8.99512 2Z"
          fill="black"
        />
      </svg>
      <div className="pages">
        <Link to="/catalog" className="page">
          1
        </Link>
        <Link to="/catalog" className="page">
          2
        </Link>
        <Link to="/catalog" className="page">
          3
        </Link>
        <Link to="/catalog" className="page">
          4
        </Link>
        <Link to="/catalog" className="page">
          5
        </Link>
        <Link to="/catalog" className="page">
          6
        </Link>
        <Link to="/catalog" className="page">
          20
        </Link>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="9"
        height="14"
        viewBox="0 0 9 14"
        fill="none"
      >
        <path
          d="M0.994995 12L5.995 7L0.994995 2L1.995 0L8.995 7L1.995 14L0.994995 12Z"
          fill="black"
        />
      </svg>
    </div>
  );
};
