import React, { useContext } from "react";
import { Link } from "react-router-dom";

//icons
import { HiOutlineShoppingCart } from "react-icons/hi";

//styles
import styles from "../../styles/navbar.module.scss";

//Context
import { CartContext } from "../../Context/CartContextProider";

const Navbar = () => {
  const { state } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <Link to="/products">
        <h1>My Shop</h1>
      </Link>
      <Link className={styles.cartIcon} to="/cartshop">
        <HiOutlineShoppingCart className={styles.shopIcon} />
        <span className={styles.number}>{state.totalCount}</span>
      </Link>
    </div>
  );
};

export default Navbar;
