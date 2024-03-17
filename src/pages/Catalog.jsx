import React, { useState, useEffect } from "react";
import axios from "axios";

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
  const [items, setItems] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://b24940cdae2d60eb.mokky.dev/items?page=${curPage}&limit=4`
        );
        setItems(response.data.items);
        setTotalPages(response.data.meta.total_pages);
      } catch (error) {
        console.error("Error fetching:", error.message);
      }
    };

    fetchData();
    window.scrollTo(0, 0);
  }, [curPage]);

  return (
    <>
      <Header />
      <div className="center bg">
        <TopHead />
      </div>
      <FilterSort />
      <div className="products center">
        <Items items={items} />
        <Pagination
          curPage={curPage}
          setCurPage={setCurPage}
          totalPages={totalPages}
        />
      </div>
      <Features />
      <Subscribe />
      <Footer />
    </>
  );
};
