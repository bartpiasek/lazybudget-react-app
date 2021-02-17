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

    // if expense -> amount " -Math.abs(amount)"
    // const amountNew = () => {
    //   if (options === "income") {
    //     return { amount: parseInt(amount) };
    //   } else {
    //     return { amount: -Math.abs(amount) };
    //   }
    // };

    // validation for amount

    // const newTransaction = {
    //   id: Math.floor(Math.random() * 10000),
    //   text,
    //   amount: {
    //     valAmount() {
    //       if (options === "income") {
    //         return parseInt(amount);
    //       } else {
    //         return -Math.abs(amount);
    //       }
    //     },
    //   },
    //   option,
    // };

    // make 2x newTransaction - newTransacitonExp, newTransactionInc, export to components
    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      text,
      amount: -Math.abs(amount),
      option,
    };
    addTransaction(newTransaction);
    console.log(addTransaction);
  };

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
