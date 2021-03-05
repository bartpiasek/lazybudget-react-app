import React, { useState, useContext, useEffect, useRef } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import axios from "../../../axios";

export const Form = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [option, setOption] = useState("expense");
  const inputRef = useRef();

  const options = [
    { label: "Income", value: "income", key: "1" },
    { label: "Expense", value: "expense", key: "2" },
  ];

  const { addTransaction } = useContext(GlobalContext);

  //RE-RENDERS IN INPUT FORM
  useEffect(() => {
    setTimeout(() => {}, 400);
  });

  const newExpenseTransaction = {
    id: Math.floor(Math.random() * 10000),
    text,
    amount: -Math.abs(amount),
    option,
  };

  const newIncomeTransaction = {
    id: Math.floor(Math.random() * 10000),
    text,
    amount: parseInt(amount),
    option,
  };

  const onSubmit = (e) => {
    axios
      .post(
        "/transactions.json",
        option === "expense"
          ? Object.assign(newExpenseTransaction)
          : Object.assign(newIncomeTransaction)
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    e.preventDefault();

    option === "expense"
      ? addTransaction(newExpenseTransaction)
      : addTransaction(newIncomeTransaction);
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <select
          className="layout__container-background"
          value={option}
          onChange={(e) => setOption(e.target.value)}
        >
          {options.map((option) => (
            <option
              className="layout__container-background"
              key={option.key}
              value={option.value}
            >
              {option.label}
            </option>
          ))}
        </select>
        <input
          className="layout__container-background"
          ref={inputRef}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Name"
        />
        <input
          className="layout__container-background"
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
