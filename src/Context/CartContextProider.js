import React, { useReducer } from "react";

//Context
export const CartContext = React.createContext();

const initialState = {
  selectedItems: [],
  total: 0,
  totalCount: 0,
  checkout: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.selectedItems.find((item) => item.id === action.payload.id)) {
        state.selectedItems.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return { ...state };
    case "REMOVE_ITEM":
      const newSelecteditems = state.selectedItems.filter(
        (item) => item.id !== action.payload.id
      );
      return { ...state, selectedItems: [...newSelecteditems] };
    case "PLUS_ITEM":
      const findIndexP = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[findIndexP].quantity++;
      return { ...state };
    case "LOW_ITEM":
      const findIndexL = state.selectedItems.findIndex(
        (item) => item.id === action.payload.id
      );
      state.selectedItems[findIndexL].quantity--;
      return { ...state };
    case "CHECKOUT":
      return {
        selectedItems: [],
        total: 0,
        totalCount: 0,
        checkout: true,
      };
    case "CLEAR":
      return {
        selectedItems: [],
        total: 0,
        totalCount: 0,
        checkout: false,
      };
    default:
      return state;
  }
};

const CartContextProider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{state, dispatch}}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProider;
