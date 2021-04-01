import React, { useState, useEffect } from "react";

import Cashflow from "../Main/Cashflow/Cashflow";
import TransactionRow from "./TrUI";

const History = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [transactions, setTransactions] = useState({});

  useEffect(() => {
    fetch("https://lazyinput-default-rtdb.firebaseio.com/transactions.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setTransactions(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );

    //SUM FIREBASE EXPENSES/INCOMES
    // transaction.option === "expense";
  }, []);
  console.log(transactions);

  return (
    <div>
      <div>
        <Cashflow />
      </div>
      <hr />
      <div>
        <div>
          <h5>Last transactions</h5>
          <div>
            {Object.values(transactions)
              .reverse()
              .map((transaction, key) => {
                return (
                  <tr key={key}>
                    <TransactionRow
                      key={transaction.id}
                      text={transaction.text}
                      amount={transaction.amount}
                      option={transaction.option}
                    />
                  </tr>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
