import React, { useContext } from "react";
import classes from "./Transaction.css";
import { GlobalContext } from "../../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li>
      {transaction.text}
      <span>
        {sign} PLN {Math.abs(transaction.amount)}
      </span>
      <button
        className={classes.button}
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
};
