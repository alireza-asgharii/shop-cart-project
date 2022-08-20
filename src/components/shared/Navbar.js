import React from "react";

//icons
import { HiOutlineShoppingCart } from "react-icons/hi";

//styles
import styles from "../../styles/navbar.module.scss";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <a href="#">
        <h1>My Shop</h1>
      </a>
      <a className={styles.cartIcon} href="#">
        <HiOutlineShoppingCart className={styles.shopIcon} />
        <span className={styles.number}>0</span>
      </a>
    </div>
  );
};

export default Navbar;
