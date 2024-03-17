import React, { useState, useEffect } from "react";
import axios from "axios";

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
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://b24940cdae2d60eb.mokky.dev/items?page=1&limit=4"
        );
        setItems(response.data.items);
      } catch (error) {
        console.error("Error fetching:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <CenterBg />
      <Categories />
      <Products products={items} />
      <Features />
      <Subscribe />
      <Footer />
    </>
  );
};
