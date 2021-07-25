import React, { useState, useContext, useRef, useReducer } from "react";
import { options, categories } from "../Data";
import { GlobalContext } from "../../../context/GlobalState";
import axios from "../../../axios";
import "../../classes.scss";

import FormBootstrap from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export const Form = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const [option, setOption] = useState("expense");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState();

  const inputRef = useRef();

  const { addTransaction } = useContext(GlobalContext);

  const newExpenseTransaction = {
    id: Math.floor(Math.random() * 10000),
    text,
    amount: -Math.abs(amount),
    option,
    date: new Date().toISOString(),
    category,
  };

  const newIncomeTransaction = {
    id: Math.floor(Math.random() * 10000),
    text,
    amount: parseInt(amount),
    option,
    date: new Date().toISOString(),
    category,
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
    <FormBootstrap className="form" onSubmit={onSubmit}>
      <FormBootstrap.Group>
        <FormBootstrap.Control
          required
          size="lg"
          placeholder="Name"
          className="element-darkmode"
          ref={inputRef}
          type="text"
          value={text}
          role="text-input"
          onChange={(e) => setText(e.target.value)}
        />
      </FormBootstrap.Group>
      <FormBootstrap.Group>
        <FormBootstrap.Control
          required
          size="lg"
          placeholder="PLN"
          className="element-darkmode"
          type="text"
          value={amount}
          role="amount-input"
          onChange={(e) => setAmount(e.target.value)}
        />
      </FormBootstrap.Group>
      <FormBootstrap.Group>
        <select
          as="select"
          size="lg"
          value={option}
          className="element-darkmode"
          role="cashflow-select"
          onChange={(e) => setOption(e.target.value)}
        >
          {options.map((option) => (
            <option key={option.key} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </FormBootstrap.Group>
      <FormBootstrap.Group>
        <radio value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((category) => (
            <FormBootstrap.Check inline>
              <input
                name="selection"
                type="radio"
                key={category.key}
                value={category.value}
                role="sort"
              />
              <label role="sort" className="button-sort">
                {category.label}
              </label>
            </FormBootstrap.Check>
          ))}
        </radio>
      </FormBootstrap.Group>
      <FormBootstrap.Group></FormBootstrap.Group>
      <Button
        className="element-darkmode"
        variant="flat"
        type="submit"
        role="button-submit"
        value={date.value}
        key={date.key}
        onClick={(e) => setDate(e.target.value)}
      >
        Add
      </Button>
      <hr />
    </FormBootstrap>
  );
};
