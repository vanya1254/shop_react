import React from "react";
import { SortDetails } from "../SortDetails";

export const FilterSort = () => {
  const categories = [
    "Accessories",
    "Bags",
    "Denim",
    "Hoodies & Sweatshirts",
    "Jackets & Coats",
    "Polos",
    "Shirts",
    "Shoes",
    "Sweaters & Knits",
    "T-Shirts",
    "Tanks",
  ];
  const brands = [
    "Adidas",
    "Nike",
    "Gucci",
    "Louis Vuitton",
    "Versace",
    "Calvin Klein",
    "Prada",
    "Chanel",
    "Puma",
    "Burberry",
    "Tommy Hilfiger",
  ];
  const designers = [
    "Giorgio Armani",
    "Calvin Klein",
    "Ralph Lauren",
    "Tom Ford",
    "Alexander McQueen",
    "Stella McCartney",
    "Marc Jacobs",
    "Donatella Versace",
    "Karl Lagerfeld",
    "Vivienne Westwood",
    "Olivier Rousteing",
  ];
  const sizes = ["XS", "S", "M", "L", "XL"];

  return (
    <div className="filter-sort center">
      <details className="filter">
        <summary className="filter-summary">
          <span className="filter-heading">FILTER</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="10"
            viewBox="0 0 15 10"
            fill="none"
          >
            <path
              d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
              fill="black"
            />
          </svg>
        </summary>
        <div className="filter-content">
          <details className="filter-content-item" open>
            <summary className="filter-content-item-heading">CATEGORY</summary>
            <div className="filter-content-item-links">
              {categories.map((category, i) => (
                <a key={i} href="" className="filter-content-item-link">
                  {category}
                </a>
              ))}
            </div>
          </details>
          <details className="filter-content-item">
            <summary className="filter-content-item-heading">BRAND</summary>
            <div className="filter-content-item-links">
              {brands.map((brand, i) => (
                <a key={i} href="" className="filter-content-item-link">
                  {brand}
                </a>
              ))}
            </div>
          </details>
          <details className="filter-content-item">
            <summary className="filter-content-item-heading">DESIGNER</summary>
            <div className="filter-content-item-links">
              {designers.map((designer, i) => (
                <a key={i} href="" className="filter-content-item-link">
                  {designer}
                </a>
              ))}
            </div>
          </details>
        </div>
      </details>
      <div className="sort">
        <SortDetails title={"TRENDING NOW"} children={[]} />
        <SortDetails
          title={"SIZE"}
          children={[
            ...sizes.map((size, i) => (
              <div key={i} className="sort-check">
                <input id={`sort-check${i}`} type="checkbox" />
                <label htmlFor={`sort-check${i}`}>{size}</label>
              </div>
            )),
          ]}
        />
        <SortDetails title={"PRICE"} children={[]} />
      </div>
    </div>
  );
};
