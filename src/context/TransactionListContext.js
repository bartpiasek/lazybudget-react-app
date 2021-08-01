import React, { useState, createContext, useEffect } from "react";

export const TransactionsContext = createContext();

export const TransactionsProvider = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [transactions, setTransactions] = useState({});

  //GLOBAL TRANSACTION FILTERS FOR HISTORY AND DASHBOARD COMPONENT
  //...

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
  }, [transactions]);

  return (
    <TransactionsContext.Provider value={[transactions]}>
      {props.children}
    </TransactionsContext.Provider>
  );
};
