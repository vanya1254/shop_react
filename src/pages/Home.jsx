import React from "react";

import {
  CenterBg,
  Header,
  Categories,
  Products,
  Features,
  Subscribe,
  Footer,
} from "../components";

export const Home = () => {
  return (
    <>
      <Header />
      <CenterBg />
      <Categories />
      <Products />
      <Features />
      <Subscribe />
      <Footer />
    </>
  );
};
