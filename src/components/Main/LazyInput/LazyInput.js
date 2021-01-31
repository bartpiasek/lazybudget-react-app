import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import Data from "./Data";
import classes from "../Form/AddTransactionForm.css";

export const LazyInput = () => {
  const [text, setText] = useState();
  const [amount, setAmount] = useState();
  const [option, setOption] = useState();

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      text,
      amount: parseInt(amount),
      option,
    };
    addTransaction(newTransaction);
    console.log(newTransaction.text);
  };

  const options = [
    { label: "Income", value: "income" },
    { label: "Expense", value: "expense" },
  ];

  const Rent = {
    text: "Rentr",
    amount: 750,
    option: "expense",
  };

  // const dla text option, amount

  return (
    // onclick nie onchange

    <div>
      <form className={classes.form} onSubmit={onSubmit}>
        {/* <select value={option} onChange={(e) => setOption(e.target.value)}>
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select> */}
        <h5 value={Rent.option}>{Rent.option}</h5>
        <h3 value={Rent.text}>{Rent.text}</h3>
        <h3 value={Rent.amount}>{Rent.amount}</h3>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};
