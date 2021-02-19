import React, { useState, useContext } from "react";
import classes from "./AddTransactionForm.css";
import { GlobalContext } from "../../../context/GlobalState";

export const Form = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [option, setOption] = useState("income");

  const options = [
    { label: "Income", value: "income", key: "1" },
    { label: "Expense", value: "expense", key: "2" },
  ];

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    //FIRST
    //   const newTransaction = {
    //     id: Math.floor(Math.random() * 10000),
    //     text,
    //     amount: -Math.abs(amount),
    //     option,
    //   };
    //   addTransaction(newTransaction);
    //   console.log(addTransaction);
    // };

    //THIRD
    const newIncomeAmount = {
      id: Math.floor(Math.random() * 10000),
      text,
      amount: parseInt(amount),
      option,
    };

    const newExpenseAmount = {
      id: Math.floor(Math.random() * 10000),
      text,
      amount: -Math.abs(amount),
      option,
    };

    //validation form addTransaction argument
    if (addTransaction.options === options["expense"]) {
      return addTransaction(newExpenseAmount);
    }
  };
  console.log({ amount: amount });

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
