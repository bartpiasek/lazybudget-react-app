import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

export const Income = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const options = transactions.map((transaction) => transaction.option);

  const newIncome = amounts.filter((item) => item !== options["Expense"]);

  const incomeSum = newIncome
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  return (
    <div>
      <div>
        <h3>Incomes</h3>
        <p>{incomeSum} PLN</p>
      </div>
    </div>
  );
};

export default Income;
