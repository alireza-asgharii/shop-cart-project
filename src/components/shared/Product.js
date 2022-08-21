import React, { useContext } from "react";
import { Link } from "react-router-dom";

//Icons
import { HiPlus } from "react-icons/hi";
import { AiOutlineMinus } from "react-icons/ai";
import { FaTrashAlt } from "react-icons/fa";

//Styles
import styles from "../../styles/product.module.scss";

//Helper
import { spliter } from "../../helper/function";
import { findItem } from "../../helper/function";
import { findCount } from "../../helper/function";

//Context
import { CartContext } from "../../Context/CartContextProider";

const Product = (props) => {
  const { state, dispatch } = useContext(CartContext);
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
          <div className={styles.buttomContainer}>

          {findCount(state, id) > 1 && (
            <button
            className={styles.buttonItem}
              onClick={() =>
                dispatch({ type: "LOW_ITEM", payload: props.data })
              }
            >
              <AiOutlineMinus />
            </button>
          )}

          {findCount(state, id) === 1 && (
            <button
              className={styles.buttonItem}
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: props.data })
              }
            >
              <FaTrashAlt />
            </button>
          )}

          {findCount(state, id) && <span className={styles.quanityItem}>{findCount(state, id)}</span>}

          {findItem(state, id) ? (
            <button
            className={styles.buttonItem}
              onClick={() =>
                dispatch({ type: "PLUS_ITEM", payload: props.data })
              }
            >
              <HiPlus />
            </button>
          ) : (
            <button
              className={styles.addItem}
              onClick={() =>
                dispatch({ type: "ADD_ITEM", payload: props.data })
              }
            >
              Add to Cart
            </button>
          )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
