import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

export const Income = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const newIncome = amounts.filter((item) => item === "income");

  const incomeSum = newIncome
    // .filter((item) => item > 0 && option.filter((item) => item === "income"))
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
