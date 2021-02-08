import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

export const LazyInput = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [option, setOption] = useState();

  const [state, setState] = useState({
    text,
    amount,
    option,
  });

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
    <div>
      <form onSubmit={onSubmit}>
        <div onClick={(e) => setState(Rent)}>
          <h5 value={Rent.option}>{Rent.option}</h5>
          <h3 value={Rent.text}>{Rent.text}</h3>
          <h3 value={Rent.amount}>{Rent.amount}</h3>
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};
