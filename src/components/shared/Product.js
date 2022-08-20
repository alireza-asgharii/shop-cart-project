import React from 'react';

//Styles
import styles from '../../styles/product.module.scss';

//Helper
import { spliter } from '../../helper/function';

const Product = (props) => {
  const {title, price, image, } = props.data
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={image} alt='product' />
      </div>
      <div>
        <h6>{spliter(title)}</h6>
        <p>{price} $</p>
        <div className={styles.bottomContiner}>
          <a href='#'>detalis</a>
          <button className={styles.addItem}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;