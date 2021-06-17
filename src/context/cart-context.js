import React, { useReducer } from "react";

const DUMMY_CART = [
  { id: "m1", name: "Sushi", price: 22.99, amount: 2 },
  { id: "m3", name: "Barbecue Burger", price: 12.99, amount: 3 },
  { id: "m4", name: "Green Bowl", price: 18.99, amount: 4 },
];

const defaultCartState = { items: [...DUMMY_CART], totalAmount: 160.91 };

function cartReducer(state, action) {
  if (action.type === "ADD") {
    const existingIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    let updatedItems = [...state.items];

    if (state.items[existingIndex]) {
      const updatedItem = {
        ...state.items[existingIndex],
        amount: state.items[existingIndex].amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingIndex] = updatedItem;
    } else {
      updatedItems = [...state.items, action.item];
    }

    return {
      items: updatedItems,
      totalAmount: state.totalAmount + action.item.price * action.item.amount,
    };
  }

  if (action.type === "REMOVE") {
    const existingIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    let updatedItems;

    if (state.items[existingIndex].amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...state.items[existingIndex],
        amount: state.items[existingIndex].amount - 1,
      };

      updatedItems = [...state.items];
      updatedItems[existingIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: state.totalAmount - state.items[existingIndex].price,
    };
  }

  return defaultCartState;
}

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export function CartContextProvider(props) {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  function addItemHandler(item) {
    dispatchCart({
      type: "ADD",
      item: item,
    });
  }

  function removeItemHandler(id) {
    dispatchCart({
      type: "REMOVE",
      id: id,
    });
  }

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;
