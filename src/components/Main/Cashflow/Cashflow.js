import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

export const Cashflow = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const total = (expense - income).toFixed(2);

  return (
    <div>
      <div>
        <h5>Expenses</h5>
        <h2>{expense} PLN</h2>
        <h5>Incomes</h5>
        <h2>{income} PLN</h2>
      </div>
    </div>
  );
};

export default Cashflow;
