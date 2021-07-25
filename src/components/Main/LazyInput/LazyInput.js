import React, { useState, useContext, useRef } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { Rent, Salary, Subscriptions } from "./Data";
import axios from "../../../axios";
import "../../classes.scss";

import FormBootstrap from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

export const LazyInput = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState();
  const [option, setOption] = useState("expense");
  const [date, setDate] = useState("");
  const [category, setCategory] = useState();

  // const inputRef = useRef();

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
    <Container>
      <Row md={4}>
        <Col>
          <FormBootstrap onSubmit={onSubmit}>
            <CardDeck>
              <Card className="element-darkmode">
                <div
                  value={Rent.text}
                  // onClick={(e) => setState(Rent)}
                >
                  <Card.Body>
                    <Card.Title>{Rent.text}</Card.Title>
                    <Card.Text>{Rent.category}</Card.Text>
                    <Card.Text>{Rent.amount} PLN</Card.Text>
                  </Card.Body>
                  <Button
                    variant="flat"
                    className="button-sort element-darkmode"
                    type="submit"
                    value={date.value}
                    key={date.key}
                    onClick={
                      ((e) => setText(Rent.text),
                      (e) => setAmount(Rent.amount),
                      (e) => setOption(Rent.option),
                      (e) => setDate(e.target.value),
                      (e) => setCategory(Rent.category))
                    }
                  >
                    Add
                  </Button>
                </div>
              </Card>
            </CardDeck>
          </FormBootstrap>
        </Col>
        <Col xs={6}></Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default LazyInput;
