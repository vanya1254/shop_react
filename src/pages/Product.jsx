import React from "react";
import { useParams } from "react-router-dom";

import {
  Header,
  TopHead,
  Slider,
  ProductLayer,
  Items,
  Subscribe,
  Footer,
} from "../components";

export const Product = () => {
  const pageParams = useParams();

  return (
    <>
      <Header />
      <div className="center bg">
        <TopHead />
      </div>
      <Slider />
      <ProductLayer product={pageParams.id} />
      <div className="products center mb-128">
        <Items />
      </div>
      <Subscribe />
      <Footer />
    </>
  );
};
