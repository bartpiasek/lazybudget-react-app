import React, { useState } from "react";
import classes from "./AddTransactionForm.css";

export const Form = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  return (
    <div>
      <form className={classes.form}>
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
