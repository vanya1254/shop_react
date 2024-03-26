import React, { useEffect, useRef, useState, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

import { Home } from "./pages/Home";

import CartContext from "./contexts/cartContext";

import "./App.scss";

const Catalog = React.lazy(() =>
  import(/*webpackChunkName: "Catalog"*/ "./pages/Catalog")
);
const Product = React.lazy(() =>
  import(/*webpackChunkName: "Product"*/ "./pages/Product")
);
const Registration = React.lazy(() =>
  import(/*webpackChunkName: "Registration"*/ "./pages/Registration")
);
const Cart = React.lazy(() =>
  import(/*webpackChunkName: "Cart"*/ "./pages/Cart")
);
const NotFound = React.lazy(() =>
  import(/*webpackChunkName: "NotFound"*/ "./pages/NotFound")
);

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
          <Route
            path={"shop_react/"}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Home />
              </Suspense>
            }
          ></Route>
          <Route
            path={"shop_react/catalog"}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Catalog />
              </Suspense>
            }
          ></Route>
          <Route
            path={"shop_react/product/:id"}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Product />
              </Suspense>
            }
          ></Route>
          <Route
            path={"shop_react/registration"}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Registration />
              </Suspense>
            }
          ></Route>
          <Route
            path={"shop_react/cart"}
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <Cart />
              </Suspense>
            }
          ></Route>
          <Route path={"*"} element={<NotFound />}></Route>
        </Routes>
      </div>
    </CartContext.Provider>
  );
};

export default App;
