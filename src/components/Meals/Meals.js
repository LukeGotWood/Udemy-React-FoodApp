import React from "react";

import MealsSummary from "../MealsSummary/MealsSummary";
import AvaliableMeals from "../AvailableMeals/AvailableMeals";

function Meals(props) {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvaliableMeals />
    </React.Fragment>
  );
}

export default Meals;
