import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Form } from "./Form/AddTransactionForm";
import classes from "./Summary.css";

const Summary = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  // new summary
  // const newtotal = incomeSum - expenseSum

  return (
    <div className={classes.LayoutContainerCard}>
      <div className={classes.LayoutContainerCardInfo}>
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
