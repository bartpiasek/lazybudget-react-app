import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Transaction } from "./Transaction";

function History() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div className="layout__section">
      <div className="layout__wrapper">
        <div className="layout__container">
          <h3>History</h3>
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
      </div>
    </div>
  );
}

export default History;
