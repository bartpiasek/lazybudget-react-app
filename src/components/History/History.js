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
  }, []);

  const transactionsObj = Object.values(transactions);

  //FILTER TRANSACTION OBJ - EXPENSES/INCOMES
  const firebaseExpenses = transactionsObj.filter((transaction) => {
    return transaction.amount < 0;
  });

  const firebaseInomes = transactionsObj.filter((transaction) => {
    return transaction.amount > 0;
  });
  console.log(firebaseExpenses);
  console.log(firebaseInomes);

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
            {transactionsObj.reverse().map((transaction, key) => {
              return (
                <div key={key}>
                  <TransactionRow
                    key={transaction.id}
                    text={transaction.text}
                    amount={transaction.amount}
                    option={transaction.option}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
