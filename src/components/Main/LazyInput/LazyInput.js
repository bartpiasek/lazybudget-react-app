import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { Rent, Tuition, Subscriptions, Salary } from "./Data";

export const LazyInput = () => {
  const [state, setState] = useState();

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 10000),
      text: state.text,
      amount: state.amount,
      option: state.option,
    };
    addTransaction(newTransaction);
    console.log(addTransaction);

    // option === "expense"
    //   ? addTransaction(newTransaction {... -Math.abs(state.amount)})
    //   : addTransaction(newTransaction);
  };

  return (
    <div className="layout__container-cardInfo">
      <form onSubmit={onSubmit}>
        <div
          className="layout__container-background"
          onClick={(e) => setState(Rent)}
        >
          <h5 value={Rent.option}>{Rent.option}</h5>
          <h3 value={Rent.text}>{Rent.text}</h3>
          <h3 value={Rent.amount}>{Rent.amount}</h3>
          <input type="submit" value="Send" />
        </div>
      </form>
      <form onSubmit={onSubmit}>
        <div
          className="layout__container-background"
          onClick={(e) => setState(Tuition)}
        >
          <h5 value={Tuition.option}>{Tuition.option}</h5>
          <h3 value={Tuition.text}>{Tuition.text}</h3>
          <h3 value={Tuition.amount}>{Tuition.amount}</h3>
          <input type="submit" value="Send" />
        </div>
      </form>
      <form onSubmit={onSubmit}>
        <div
          className="layout__container-background"
          onClick={(e) => setState(Salary)}
        >
          <h5 value={Salary.option}>{Salary.option}</h5>
          <h3 value={Salary.text}>{Salary.text}</h3>
          <h3 value={Salary.amount}>{Salary.amount}</h3>
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};
