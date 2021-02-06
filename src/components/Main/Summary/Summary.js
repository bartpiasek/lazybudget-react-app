import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { Form } from "../Form/AddTransactionForm";
import classes from "./Summary.css";

import Income from "../Cashflow/Income";
import Expense from "../Cashflow/Expenses";

const Summary = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  // Cashflow/Income - Cashflow/Expense = totalSum

  return (
    <div className={classes.LayoutContainerCard}>
      <div className={classes.LayoutContainerCardInfo}>
        <Income />
        <Expense />
        <h3>Total balance</h3>

        <h3>{total} PLN</h3>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Summary;
