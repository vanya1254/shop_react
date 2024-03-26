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
  const [sizes, setSizes] = useState([]);
  const [curSizes, setCurSizes] = useState([]);
  const sizesList = ["XS", "S", "M", "L", "XL"];

  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `https://b24940cdae2d60eb.mokky.dev/items?page=${curPage}&limit=4`
      );
      setItems(data.items);
      setTotalPages(data.meta.total_pages);

      const sizesFromResponse = sizesList
        .map((size) => {
          const check = data.items.filter((item) => item.size === size).length;

          if (check) {
            return size;
          }
        })
        .filter((size) => size);

      setSizes(sizesFromResponse);
    } catch (error) {
      console.error("Error fetching:", error.message);
    }
  };

  const setFilteredItems = () => {
    let filteredItems = [];
    filteredItems = filteredItems.concat.apply(
      filteredItems,
      curSizes.map((size) => {
        const itemsPerSize = items
          .filter((item) => {
            if (item.size === size) {
              return item;
            }
          })
          .filter((i) => i);

        return itemsPerSize;
      })
    );

    setItems(filteredItems);
  };

  useEffect(() => {
    const getData = async () => {
      if (curSizes.length) {
        await fetchData();

        setFilteredItems();
      } else {
        await fetchData();
      }
    };

    getData();
    window.scrollTo(0, 0);
  }, [curPage, curSizes]);

  return (
    <>
      <Header />
      <div className="center bg">
        <TopHead />
      </div>
      <FilterSort sizes={sizes} setCurSizes={setCurSizes} />
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
