import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  //convert js object to array of strings
  //Object.keys() returns an array of keys
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + 1} type={igKey} />; //creates key e.g salad1, salad2
      }); // for every ingredient it returns an arry of size - value of ingredient
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []); //[] initial value

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients..</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
