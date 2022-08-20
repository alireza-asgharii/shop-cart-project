import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Products from "./Products";
import Detalis from "./shared/Detalis";

const Main = () => {
  return (
    <>
      <Routes>
        <Route  path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Detalis />} />
        <Route path="/*" element={<Navigate to='/products' /> } />
      </Routes>
    </>
  );
};

export default Main;
