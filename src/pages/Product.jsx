import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
  const [product, setProduct] = useState();

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://b24940cdae2d60eb.mokky.dev/items/${pageParams.id}`
      );
      setProduct(data);

      // const sizesFromResponse = sizesList
      //   .map((size) => {
      //     const check = data.items.filter((item) => item.size === size).length;

      //     if (check) {
      //       return size;
      //     }
      //   })
      //   .filter((size) => size);

      // setSizes(sizesFromResponse);
    } catch (error) {
      console.error("Error fetching:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [pageParams]);

  return (
    <>
      <Header />
      {product && (
        <>
          <div className="center bg">
            <TopHead />
          </div>
          <Slider img={product.imgUrl} />
          <ProductLayer product={product} />
          <div className="products center mb-128">
            <Items />
          </div>
        </>
      )}
      <Subscribe />
      <Footer />
    </>
  );
};
