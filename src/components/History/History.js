import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Transaction } from "./Transaction";

function History() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>Transaction history</h3>
      <ul>
        {transactions.map((transaction) => (
          <Transaction
            className="layout__container-background"
            key={transaction.id}
            transaction={transaction}
          />
        ))}
      </ul>
    </div>
  );
}

export default History;
