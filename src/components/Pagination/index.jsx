import React from "react";
import { Link } from "react-router-dom";

export const Pagination = ({ curPage, setCurPage, totalPages }) => {
  const onClickPage = (pageIdx) => {
    setCurPage(pageIdx);
  };

  const onClickNextPage = () => {
    setCurPage((prev) => {
      if (prev < totalPages) {
        prev += 1;
      }
      return prev;
    });
  };

  const onClickPrevPage = () => {
    setCurPage((prev) => {
      if (prev > 1) {
        prev -= 1;
      }
      return prev;
    });
  };

  return (
    <div className="pagination">
      <svg
        onClick={onClickPrevPage}
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
        {[...new Array(totalPages)].map((_, i) => (
          <Link
            key={i}
            to="/catalog"
            className={`page ${curPage == i + 1 ? "active" : ""}`}
            onClick={() => onClickPage(i + 1)}
          >
            {i + 1}
          </Link>
        ))}
      </div>
      <svg
        onClick={onClickNextPage}
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
