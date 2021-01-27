import React, { useState, useContext } from "react";
import classes from "./AddTransactionForm.css";
import { GlobalContext } from "../../../context/GlobalState";

export const Form = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      // hooks [text, amount], form value
      text,
      // amount must be a number, before it was string
      amount: parseInt(amount),
    };
    addTransaction(newTransaction);
  };

  return (
    <div>
      <form className={classes.form} onSubmit={onSubmit}>
        <select>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
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
