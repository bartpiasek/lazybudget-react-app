import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

export const Income = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const options = transactions.map((transaction) => transaction.option);

  // const newIncome = amounts.filter((item) => item !== options["expense"]);

  //first
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0);

  // my ver
  // const incomeSum = newIncome
  //   .reduce((acc, item) => (acc += item), 0)
  //   .toFixed(2);

  return (
    <div>
      <div>
        <h3>Incomes</h3>
        <p>{income} PLN</p>
      </div>
    </div>
  );
};

export default Income;
