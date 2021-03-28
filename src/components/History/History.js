import React, { useState, useEffect } from "react";
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
  console.log(transactions);

  return (
    <div>
      <hr />
      <div>
        <div>
          <h3>History</h3>
          <ul>
            {Object.values(transactions).map((transaction, key) => {
              return (
                <li key={key}>
                  <TransactionRow
                    key={transaction.id}
                    text={transaction.text}
                    amount={transaction.amount}
                    option={transaction.option}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default History;
