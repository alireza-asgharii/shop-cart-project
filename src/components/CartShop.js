import React, { useContext } from "react";

//Context
import { CartContext } from "../Context/CartContextProider";
import CartItem from "./shared/CartItem";

//styles
import styles from '../styles/cartShop.module.scss';
import { Link } from "react-router-dom";

const CartShop = () => {
  const { state, dispatch } = useContext(CartContext);
  console.log(state);

  return (
    <div className={styles.container}>
      <div className={styles.productConatiner}>
        {state.selectedItems.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
      </div>
      {state.totalCount > 0 && (
        <div className={styles.totalBox}>
          <div>
            <h4>Total Items: </h4>
            <span>{state.itemCounter}</span>
          </div>
          <div>
            <h4>Total Payment: </h4>
            <span>{state.total} $</span>
          </div>
          <div>
            <button className={styles.clear} onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
            <button className={styles.checkout} onClick={() => dispatch({ type: "CHECKOUT" })}>
              checkout
            </button>
          </div>
        </div>
      )}
        {state.checkout && (
          <div className={styles.emptyCart}>
            <h1>checkout Seccsussfully</h1>
            <Link to="/products">Buy more</Link>
          </div>
        )}

        {!state.checkout && state.totalCount === 0 && (
          <div className={styles.emptyCart}>
            <h1>Want to Buy?</h1>
            <Link to="/products">go to Shop</Link>
          </div>
        )}
    </div>
  );
};

export default CartShop;
