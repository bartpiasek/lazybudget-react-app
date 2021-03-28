import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { Rent, Salary } from "./Data";

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
          value={(Rent.option, Rent.amount, Rent.text)}
          className="layout__container-background-lazyinput"
          onClick={(e) => setState(Rent)}
        >
          <h3>{Rent.text}</h3>
          <input type="submit" value="Send" />
        </div>
      </form>
      <form onSubmit={onSubmit}>
        <div
          value={(Salary.option, Salary.amount, Salary.text)}
          className="layout__container-background-lazyinput"
          onClick={(e) => setState(Salary)}
        >
          <h3>{Salary.text}</h3>
          <input type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
};

export default LazyInput;
