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
  console.log(transactionsObj);
  const transactionsKeys = Object.keys(transactions);

  //V1
  // transactionsObj only with amount
  // const transactionsAmount = Object.keys(transactions).reduce((acc, key) => {
  //   if (key !== "amount") {
  //     acc[key] = transactions[key];
  //   }
  //   return acc;
  // }, {});
  // console.log(transactionsAmount);

  //V2
  // const transactionsAmount = Object.keys(transactions)
  //   .filter((key) => key !== "amount")
  //   .reduce((obj, key) => {
  //     obj[key] = transactions[key];
  //     return obj;
  //   }, {});
  // console.log(transactionsAmount);

  //V3
  // let transactionsAmount = Object.values(transactions);
  // const { text, ...trAmount } = transactionsAmount;
  // console.log(trAmount);
  // console.log(transactionsAmount);

  //V4 DECONSTRUCTING PRZEZ ID

  //FILTER TRANSACTION OBJ - EXPENSES/INCOMES
  const firebaseExpenses = transactionsObj.filter((transaction) => {
    return transaction.amount < 0;
  });

  const firebaseIncomes = transactionsObj.filter((transaction) => {
    return transaction.amount > 0;
  });

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
