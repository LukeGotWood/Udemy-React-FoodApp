import { useContext } from "react";

import MealItemForm from "../MealItemForm/MealItemForm";
import CartContext from "../../context/cart-context";

import styles from "./MealItem.module.css";

function MealItem(props) {
  const ctx = useContext(CartContext);

  function onAddHandler(amount) {
    ctx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: amount,
    });
  }

  return (
    <li className={styles.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles.description}>{props.description}</div>
        <div className={styles.price}>{`£${props.price.toFixed(2)}`}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAdd={onAddHandler} />
      </div>
    </li>
  );
}

export default MealItem;
