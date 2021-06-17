import { useContext } from "react";

import CartItem from "../CartItem/CartItem";
import Modal from "../Modal/Modal";
import CartContext from "../../context/cart-context";

import styles from "./Cart.module.css";

function Cart(props) {
  const ctx = useContext(CartContext);

  function removeHandler(id) {
    ctx.removeItem(id);
  }
  function addHandler(item) {
    ctx.addItem({ ...item, amount: 1 });
  }

  return (
    <Modal onClose={props.onHideCart}>
      <ul>
        {ctx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            price={item.price}
            amount={item.amount}
            onRemove={removeHandler.bind(null, item.id)}
            onAdd={addHandler.bind(null, item)}
          />
        ))}
      </ul>
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{`£${ctx.totalAmount.toFixed(2)}`}</span>
      </div>
      <div className={styles.actions}>
        <button className={styles.button} onClick={props.onHideCart}>
          Close
        </button>
        {ctx.items.length > 0 && (
          <button className={styles.button}>Order</button>
        )}
      </div>
    </Modal>
  );
}

export default Cart;
