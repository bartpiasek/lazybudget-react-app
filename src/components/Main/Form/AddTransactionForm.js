import React, { useState, useContext, useRef } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import axios from "../../../axios";
import "../../classes.css";

import FormBootstrap from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormCheck from "react-bootstrap/esm/FormCheck";

export const Form = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);
  const [option, setOption] = useState("expense");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState();

  const [clicked, setClicked] = useState(false);
  const handleClicked = () => setClicked(!clicked);

  const inputRef = useRef();

  const options = [
    { label: "Income", value: "income", key: "1" },
    { label: "Expense", value: "expense", key: "2" },
  ];

  const categories = [
    { label: "Food", value: "food", key: "1" },
    { label: "Housing", value: "housing", key: "2" },
    { label: "Bills", value: "bills", key: "3" },
    { label: "Entertainment", value: "entertainment", key: "4" },
    { label: "Misc", value: "misc", key: "5" },
    { label: "Saving", value: "saving", key: "6" },
  ];

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
          className="layout__container-background"
          ref={inputRef}
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </FormBootstrap.Group>
      <FormBootstrap.Group>
        <FormBootstrap.Control
          required
          size="lg"
          placeholder="PLN"
          className="layout__container-background"
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </FormBootstrap.Group>
      <FormBootstrap.Group>
        <select
          as="select"
          size="lg"
          className="layout__select"
          value={option}
          onChange={(e) => setOption(e.target.value)}
        >
          {options.map((option) => (
            <option
              className="layout__select"
              key={option.key}
              value={option.value}
            >
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
                // checked={clicked}
              />
              <label className="button-sort">{category.label}</label>
            </FormBootstrap.Check>
          ))}
        </radio>
      </FormBootstrap.Group>
      <FormBootstrap.Group></FormBootstrap.Group>
      <Button
        className="button"
        type="submit"
        value="Send"
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
