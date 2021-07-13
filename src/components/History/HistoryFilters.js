import React, { useContext, useState } from "react";
import { TransactionsContext } from "../../context/TransactionListContext";
import "../classes.scss";
import TransactionRow from "./TransactionUI";

//FILTER BY TYPE OF CASHFLOW
export const AllFilter = () => {
  const [transactions] = useContext(TransactionsContext);
  const transactionsValues = Object.values(transactions);
  const sumTransactionValues = transactionsValues
    .reverse()
    .map((transaction) => transaction.amount);
  return (
    <div className="table">
      {transactionsValues.map((transaction, key) => {
        return (
          <div key={key}>
            <TransactionRow
              key={transaction.id}
              text={transaction.text}
              amount={transaction.amount}
              option={transaction.option}
              date={transaction.date}
              category={transaction.category}
            />
          </div>
        );
      })}
    </div>
  );
};

export const IncomeFilter = () => {
  const [transactions] = useContext(TransactionsContext);
  const transactionsValues = Object.values(transactions);
  const sumTransactionValues = transactionsValues
    .reverse()
    .map((transaction) => transaction.amount);
  return (
    <div className="table">
      {transactionsValues.map((transaction, key) => {
        return transaction.option === "income" ? (
          <div key={key}>
            <TransactionRow
              key={transaction.id}
              text={transaction.text}
              amount={transaction.amount}
              option={transaction.option}
              date={transaction.date}
              category={transaction.category}
            />
          </div>
        ) : null;
      })}
    </div>
  );
};

export const ExpenseFilter = () => {
  const [transactions] = useContext(TransactionsContext);
  const transactionsValues = Object.values(transactions);
  const sumTransactionValues = transactionsValues
    .reverse()
    .map((transaction) => transaction.amount);
  return (
    <div className="table">
      {transactionsValues.map((transaction, key) => {
        return transaction.option === "expense" ? (
          <div key={key}>
            <TransactionRow
              key={transaction.id}
              text={transaction.text}
              amount={transaction.amount}
              option={transaction.option}
              date={transaction.date}
              category={transaction.category}
            />
          </div>
        ) : null;
      })}
    </div>
  );
};

// //FILTER BY CATEGORY
export const CategoryFoodFilter = () => {
  const [transactions] = useContext(TransactionsContext);
  const transactionsValues = Object.values(transactions);
  const sumTransactionValues = transactionsValues
    .reverse()
    .map((transaction) => transaction.amount);
  return (
    <div className="table">
      {transactionsValues.map((transaction, key) => {
        return transaction.category === "food" ? (
          <div key={key}>
            <TransactionRow
              key={transaction.id}
              text={transaction.text}
              amount={transaction.amount}
              option={transaction.option}
              date={transaction.date}
              category={transaction.category}
            />
          </div>
        ) : null;
      })}
    </div>
  );
};

export const CategoryHousingFilter = () => {
  const [transactions] = useContext(TransactionsContext);
  const transactionsValues = Object.values(transactions);
  const sumTransactionValues = transactionsValues
    .reverse()
    .map((transaction) => transaction.amount);
  return (
    <div className="table">
      {transactionsValues.map((transaction, key) => {
        return transaction.category === "housing" ? (
          <div key={key}>
            <TransactionRow
              key={transaction.id}
              text={transaction.text}
              amount={transaction.amount}
              option={transaction.option}
              date={transaction.date}
              category={transaction.category}
            />
          </div>
        ) : null;
      })}
    </div>
  );
};

export const CategoryBillsFilter = () => {
  const [transactions] = useContext(TransactionsContext);
  const transactionsValues = Object.values(transactions);
  const sumTransactionValues = transactionsValues
    .reverse()
    .map((transaction) => transaction.amount);
  return (
    <div className="table">
      {transactionsValues.map((transaction, key) => {
        return transaction.category === "bills" ? (
          <div key={key}>
            <TransactionRow
              key={transaction.id}
              text={transaction.text}
              amount={transaction.amount}
              option={transaction.option}
              date={transaction.date}
              category={transaction.category}
            />
          </div>
        ) : null;
      })}
    </div>
  );
};

export const CategoryEntertainmentFilter = () => {
  const [transactions] = useContext(TransactionsContext);
  const transactionsValues = Object.values(transactions);
  const sumTransactionValues = transactionsValues
    .reverse()
    .map((transaction) => transaction.amount);
  return (
    <div className="table">
      {transactionsValues.map((transaction, key) => {
        return transaction.category === "entertainment" ? (
          <div key={key}>
            <TransactionRow
              key={transaction.id}
              text={transaction.text}
              amount={transaction.amount}
              option={transaction.option}
              date={transaction.date}
              category={transaction.category}
            />
          </div>
        ) : null;
      })}
    </div>
  );
};

export const CategoryMiscFilter = () => {
  const [transactions] = useContext(TransactionsContext);
  const transactionsValues = Object.values(transactions);
  const sumTransactionValues = transactionsValues
    .reverse()
    .map((transaction) => transaction.amount);
  return (
    <div className="table">
      {transactionsValues.map((transaction, key) => {
        return transaction.category === "misc" ? (
          <div key={key}>
            <TransactionRow
              key={transaction.id}
              text={transaction.text}
              amount={transaction.amount}
              option={transaction.option}
              date={transaction.date}
              category={transaction.category}
            />
          </div>
        ) : null;
      })}
    </div>
  );
};

export const CategorySavingsFilter = () => {
  const [transactions] = useContext(TransactionsContext);
  const transactionsValues = Object.values(transactions);
  const sumTransactionValues = transactionsValues
    .reverse()
    .map((transaction) => transaction.amount);
  return (
    <div className="table">
      {transactionsValues.map((transaction, key) => {
        return transaction.category === "savings" ? (
          <div key={key}>
            <TransactionRow
              key={transaction.id}
              text={transaction.text}
              amount={transaction.amount}
              option={transaction.option}
              date={transaction.date}
              category={transaction.category}
            />
          </div>
        ) : null;
      })}
    </div>
  );
};

// //FILTER BY TIME
// export const thisMonthFilter = (
//   <div className="table">
//     {transactionsValues.map((transaction, key) => {
//       return transaction.category === "saving" ? (
//         <div key={key}>
//           <TransactionRow
//             key={transaction.id}
//             text={transaction.text}
//             amount={transaction.amount}
//             option={transaction.option}
//             date={transaction.date}
//             category={transaction.category}
//           />
//         </div>
//       ) : null;
//     })}
//   </div>
// );
