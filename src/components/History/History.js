import React, { useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";
import { Transaction } from "./Transaction";
import classes from "./History.css";

export default function History() {
  const { transactions } = useContext(GlobalContext);

  return (
    <div>
      <h3>Transaction history</h3>
      <ul>
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}
