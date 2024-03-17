import React, { useEffect, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { Product } from "./pages/Product";
import { Registration } from "./pages/Registration";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";

import CartContext from "./contexts/cartContext";

import "./App.scss";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const firstLoadingRef = useRef(true);

  useEffect(() => {
    if (firstLoadingRef.current) {
      const fetchData = async () => {
        try {
          const response = await axios.get(
            "https://b24940cdae2d60eb.mokky.dev/cart"
          );
          setCartItems(response.data);
        } catch (error) {
          console.error("Error fetching:", error.message);
        }
      };

      fetchData();
      firstLoadingRef.current = false;
    }
  }, []);

  useEffect(() => {
    if (!firstLoadingRef.current) {
      const fetchData = async () => {
        try {
          const response = await axios.patch(
            "https://b24940cdae2d60eb.mokky.dev/cart",
            cartItems
          );
        } catch (error) {
          console.error("Error fetching:", error.message);
        }
      };

      fetchData();
    }
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      <div className="App">
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/catalog"} element={<Catalog />}></Route>
          <Route path={"/product/:id"} element={<Product />}></Route>
          <Route path={"/registration"} element={<Registration />}></Route>
          <Route path={"/cart"} element={<Cart />}></Route>
          <Route path={"*"} element={<NotFound />}></Route>
        </Routes>
      </div>
    </CartContext.Provider>
  );
};

export default App;
