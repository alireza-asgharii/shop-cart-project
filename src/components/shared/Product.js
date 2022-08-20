import React from "react";
import { Link } from "react-router-dom";

//Styles
import styles from "../../styles/product.module.scss";

//Helper
import { spliter } from "../../helper/function";

const Product = (props) => {
  const { title, price, image, id } = props.data;
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={image} alt="product" />
      </div>
      <div>
        <h6>{spliter(title)}</h6>
        <p>{price} $</p>
        <div className={styles.bottomContiner}>
          <Link to={`/products/${id}`}>detalis</Link>
          <button className={styles.addItem}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
