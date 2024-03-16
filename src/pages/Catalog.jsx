import React from "react";
import {
  Header,
  TopHead,
  FilterSort,
  Items,
  Pagination,
  Features,
  Subscribe,
  Footer,
} from "../components";

export const Catalog = () => {
  return (
    <>
      <Header />
      <div className="center bg">
        <TopHead />
      </div>
      <FilterSort />
      <div className="products center">
        <Items />
        <Pagination />
      </div>
      <Features />
      <Subscribe />
      <Footer />
    </>
  );
};
