import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductList } from "./ProductList";
import { NavList } from "./NavList";
import { Home } from "./Home";
import { TableList } from "./TableList";

export const Landing = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <NavList />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prodlist" element={<ProductList />} />
          <Route path="/table" element={<TableList />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
