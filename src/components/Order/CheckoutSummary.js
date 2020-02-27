import React from "react";
import Burger from "../Burger/Burger";
import classes from "./CheckoutSummary.css";
import Button from "../UI/Button/Button";

const checkoutSummary = props => {
  return (
    <div className={classes.checkoutSummary}>
      <h1>Hope it tastes well!!</h1>
      <div style={{ width: "100%", height: "300px", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>
        CONTINUE
      </Button>
    </div>
  );
};
export default checkoutSummary;
