import { useContext, useEffect, useState } from "react";

import CartIcon from "../CartIcon/CartIcon";
import CartContext from "../../context/cart-context";

import styles from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
  const [btnAnim, setBtnAnim] = useState(false);
  const ctx = useContext(CartContext);

  useEffect(() => {
    if (ctx.items.length === 0) {
      return;
    }
    setBtnAnim(true);

    const timer = setTimeout(() => {
      setBtnAnim(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [ctx.items]);

  const numberOfCartItems = ctx.items.reduce((accumulator, item) => {
    return accumulator + item.amount;
  }, 0);

  return (
    <button
      className={`${styles.button} ${btnAnim ? styles.bump : ""}`}
      onClick={props.onClick}
    >
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={styles.badge}>{numberOfCartItems}</span>
    </button>
  );
}

export default HeaderCartButton;
