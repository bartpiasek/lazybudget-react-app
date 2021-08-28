import React, { FC, useState, createContext, useEffect } from "react";

export interface Transaction {
  text: string;
  amount: number;
  option: string;
  category?: string;
  date: string;
  id: number;
}

export interface Transactions {
  transactions: Transaction[];
}

export const TransactionsContext = createContext<Transactions | undefined>(undefined);

export const TransactionsProvider: FC = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [transactions, setTransactions] = useState<Transactions>();

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
    <TransactionsContext.Provider value={transactions}>
      {props.children}
    </TransactionsContext.Provider>
  );
};