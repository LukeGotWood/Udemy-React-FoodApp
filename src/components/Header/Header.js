import React from "react";

import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

import styles from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";

function Header(props) {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>

      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="A table full of food" />
      </div>
    </React.Fragment>
  );
}

export default Header;
