import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

export const LazyInput = () => {
  const Rent = {
    text: "Rent",
    amount: 750,
    option: "expense",
  };

  const options = [
    { label: "Income", value: "income" },
    { label: "Expense", value: "expense" },
  ];

  const [state, setState] = useState();

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
    };
    addTransaction(newTransaction);
    console.log(addTransaction);
  };

  return (
    <div className="layout__container-cardInfo">
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
