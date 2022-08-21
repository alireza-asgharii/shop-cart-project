import React, { useContext } from "react";

//icons
import { AiOutlineLine } from "react-icons/ai";
import { BsFillTrashFill } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";

//Helper
import { spliter } from "../../helper/function";

//styles
import styles from "../../styles/cartItem.module.scss";

//Conetxt
import { CartContext } from "../../Context/CartContextProider";

const CartItem = (props) => {
  const { title, price, image, quantity } = props.data;
  const { dispatch } = useContext(CartContext);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <img src={image} alt="product" width="200px" />
      </div>
      <div className={styles.text}>
        <h3>{spliter(title)}</h3>
        <p>{price} $</p>
      </div>
      <div className={styles.quanity}>
        <span>{quantity}</span>
      </div>
      <div className={styles.buttonContainer}>
        {quantity > 1 ? (
          <button
            onClick={() => dispatch({ type: "LOW_ITEM", payload: props.data })}
          >
            <AiOutlineLine />
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
          >
            <BsFillTrashFill />
          </button>
        )}

        {quantity > 0 && (
          <button
            onClick={() => dispatch({ type: "PLUS_ITEM", payload: props.data })}
          >
            <FaPlus />
          </button>
        )}
      </div>
    </div>
  );
};

export default CartItem;
