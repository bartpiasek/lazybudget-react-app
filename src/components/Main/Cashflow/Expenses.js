import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

export const Expenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const newExpense = amounts.filter(
    (item) => item === "expense" || item !== "income"
  );

  const expenseSum =
    newExpense
      // .filter((item) => item > 0)
      .filter((item) => item < 0)
      .reduce((acc, item) => (acc += item), 0) * -1;

  return (
    <div>
      <div>
        <h3>Expenses</h3>
        <p>{expenseSum} PLN</p>
      </div>
    </div>
  );
};

export default Expenses;
