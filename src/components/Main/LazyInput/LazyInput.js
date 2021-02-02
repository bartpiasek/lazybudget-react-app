import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import Data from "./Data";

export const LazyInput = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
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
    console.log(addTransaction);
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

  return (
    // onclick nie onchange
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <h5 value={Rent.option} onClick={(e) => setOption(Rent.option)}>
            {Rent.option}
          </h5>
          <h3 value={Rent.text} onClick={(e) => setText(Rent.text)}>
            {Rent.text}
          </h3>
          <h3 value={Rent.amount} onClick={(e) => setAmount(Rent.amount)}>
            {Rent.amount}
          </h3>
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};
