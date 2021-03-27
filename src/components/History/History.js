import React, { useState, useEffect } from "react";

const History = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [transactions, setTransactions] = useState({});

  // async function fetchData() {
  //   const res = await fetch(
  //     "https://lazyinput-default-rtdb.firebaseio.com/transactions"
  //   );
  //   res
  //     .json()
  //     .then((res) => setData(res))
  //     .catch((err) => setErrors(err));
  //   console.log(res);
  // }

  // useEffect(() => {
  //   fetchData();
  // });

  useEffect(() => {
    fetch("https://lazyinput-default-rtdb.firebaseio.com/transactions")
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

  return (
    <div>
      <div>
        <div>
          <h3>History</h3>
          {/* <ul>
            {transactions.map((transaction) => (
              <li key={transaction.id}>
                <span>{transaction.text}</span>
                <span>{transaction.amount}</span>
              </li>
            ))}
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default History;
