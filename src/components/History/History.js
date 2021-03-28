import React, { useState, useEffect } from "react";

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
      <div>
        <div>
          <h3>History</h3>
          {/* //V1 */}
          <ul>
            {Object.keys(transactions).map((transaction, idx) => {
              return (
                <li key={idx}>
                  <span>{transaction.option}</span>
                  <span>{transaction.text}</span>
                  <span>{transaction.amount}</span>
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
