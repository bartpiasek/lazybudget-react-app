import React from "react";
import classes from "./Transaction.css";

export const Transaction = ({ transaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li>
      {transaction.text}
      <span>
        {sign} PLN {Math.abs(transaction.amount)}
      </span>
      <button className={classes.button}>remove</button>
    </li>
  );
};
