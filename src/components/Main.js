import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

//Components
import Products from "./Products";
import Detalis from "./shared/Detalis";

//styles
import styles from '../styles/main.module.scss';
import CartShop from "./CartShop";

const Main = () => {
  return (
    <div className={styles.container}>
      <Routes>
        <Route  path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Detalis />} />
        <Route path="/cartshop" element={<CartShop />} />
        <Route path="/*" element={<Navigate to='/products' /> } />
      </Routes>
    </div>
  );
};

export default Main;
