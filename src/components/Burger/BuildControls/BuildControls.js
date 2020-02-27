import React from "react";
import classes from "./BuildControls.css";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: "Cheese", type: "cheese" },
  { label: "Bacon", type: "bacon" },
  { label: "Meat", type: "meat" },
  { label: "Salad", type: "salad" }
];

const buildControls = props => (
  <div className={classes.BuildControls}>
    <p>
      Current price : <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map(ct => (
      <BuildControl
        key={ct.label}
        label={ct.label}
        added={() => props.addedIngredient(ct.type)}
        removed={() => props.removedIngredient(ct.type)}
        disabled={props.disabled[ct.type]}
        purchasable={props.purchasable}
      />
    ))}
    <button
      className={classes.OrderButton}
      disabled={!props.purchasable}
      onClick={props.ordered}
    >
      {props.isAuth ? "ORDER NOW" : "SIGN UP TO ORDER"}
    </button>
  </div>
);

export default buildControls;
