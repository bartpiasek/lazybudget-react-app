import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { Rent, Salary, Subscriptions } from "./Data";
import "../../classes.css";

import FormBootstrap from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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
    <Container>
      <Row md={4}>
        <Col>
          {" "}
          <FormBootstrap
            className="lazy__container-background"
            onSubmit={onSubmit}
          >
            <div
              value={(Rent.option, Rent.amount, Rent.text)}
              onClick={(e) => setState(Rent)}
            >
              <h5>{Rent.text}</h5>
              <Button type="submit" value="Send">
                Add
              </Button>
            </div>
          </FormBootstrap>
        </Col>
        <Col xs={6}>
          {" "}
          <FormBootstrap
            className="lazy__container-background"
            onSubmit={onSubmit}
          >
            <div
              value={(Salary.option, Salary.amount, Salary.text)}
              onClick={(e) => setState(Salary)}
            >
              <h5>{Salary.text}</h5>
              <Button type="submit" value="Send">
                Add
              </Button>
            </div>
          </FormBootstrap>
        </Col>
        <Col>
          <FormBootstrap
            className="lazy__container-background"
            onSubmit={onSubmit}
          >
            <div
              value={
                (Subscriptions.option, Subscriptions.amount, Subscriptions.text)
              }
              onClick={(e) => setState(Salary)}
            >
              <h5>{Subscriptions.text}</h5>
              <Button type="submit" value="Send">
                Add
              </Button>
            </div>
          </FormBootstrap>
        </Col>
      </Row>
    </Container>
  );
};

export default LazyInput;
