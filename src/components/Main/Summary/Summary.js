import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { Form } from "../Form/AddTransactionForm";

const Summary = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="layout__section">
      <div className="layout__wrapper">
        <h3>Total balance</h3>

        <h3 className="layout__container-background">{total} PLN</h3>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Summary;
