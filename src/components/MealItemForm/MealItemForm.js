import { useRef, useState } from "react";

import Input from "../Input/Input";

import styles from "./MealItemForm.module.css";

function MealItemForm(props) {
  const amountInputRef = useRef();

  const [amountIsValid, setAmountIsValid] = useState(true);

  function AddMealHandler(event) {
    event.preventDefault();

    const amountInput = amountInputRef.current.value;

    if (
      amountInput.trim().length === 0 ||
      +amountInput < 1 ||
      +amountInput > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    console.log(+amountInput);

    props.onAdd(+amountInput);
  }

  return (
    <form className={styles.form} onSubmit={AddMealHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button type="submit">+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
    </form>
  );
}

export default MealItemForm;
