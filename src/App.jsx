import React from "react";
import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Catalog } from "./pages/Catalog";
import { Product } from "./pages/Product";
import { NotFound } from "./pages/NotFound";

import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={"/"} element={<Home />}></Route>
        <Route path={"/catalog"} element={<Catalog />}></Route>
        <Route path={"/product"} element={<Product />}></Route>
        <Route path={"*"} element={<NotFound />}></Route>
      </Routes>
    </div>
  );
};

export default App;
