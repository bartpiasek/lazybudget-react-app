import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

export const Income = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const incomeSum = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div>
      <div>
        <h2>Incomes</h2>
        <p>{incomeSum} PLN</p>
      </div>
    </div>
  );
};
