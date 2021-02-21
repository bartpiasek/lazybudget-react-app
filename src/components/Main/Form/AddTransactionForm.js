import React, { useState, useContext } from "react";
import classes from "./AddTransactionForm.css";
import { GlobalContext } from "../../../context/GlobalState";

export const Form = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [option, setOption] = useState("");

  const options = [
    { label: "Income", value: "income", key: "1" },
    { label: "Expense", value: "expense", key: "2" },
  ];

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newExpenseTransaction = {
      id: Math.floor(Math.random() * 10000),
      text,
      amount: -Math.abs(amount),
      option,
    };
    console.log(newExpenseTransaction.option);
    // addTransaction(newExpenseAmount);

    const newIncomeTransaction = {
      id: Math.floor(Math.random() * 10000),
      text,
      amount: parseInt(amount),
      option,
    };
    console.log(newIncomeTransaction.option);
    // addTransaction(newIncomeAmount);

    // if (addTransaction.option === options["income"]) {
    //   return newIncomeAmount, addTransaction(newIncomeAmount);
    // } else if (addTransaction.option === options["expense"]) {
    //   return newExpenseAmount, addTransaction(newExpenseAmount);
    // }

    if (addTransaction.option === options["expense"]) {
      return addTransaction(newExpenseTransaction);
    } else if (addTransaction.option === options["income"]) {
      return addTransaction(newIncomeTransaction);
    }
  };
  console.log({ amount: amount });
  console.log(addTransaction);

  return (
    <div>
      <form className={classes.form} onSubmit={onSubmit}>
        <select value={option} onChange={(e) => setOption(e.target.value)}>
          {options.map((option) => (
            <option key={option.key} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="PLN"
        />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
