import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

export const Expenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const expenseSum = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div>
      <div>
        <h2>Expenses</h2>
        <p>{Math.abs(expenseSum)} PLN</p>
      </div>
    </div>
  );
};
