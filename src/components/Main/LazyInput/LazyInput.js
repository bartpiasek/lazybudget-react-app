import React, { useState, useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { Rent, Salary, Subscriptions } from "./Data";
import "../../classes.css";

import FormBootstrap from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

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
  };

  return (
    <Container>
      <Row md={4}>
        <Col></Col>
        <Col xs={6}>
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
              onClick={(e) => setState(Subscriptions)}
            >
              <h5>{Subscriptions.text}</h5>
              <Button type="submit" value="Send">
                Add
              </Button>
            </div>
          </FormBootstrap>
        </Col>
      </Row>

      <CardDeck>
        <Card className="lazy__container-background" onSubmit={onSubmit}>
          <div
            value={(Salary.option, Salary.amount, Salary.text)}
            onClick={(e) => setState(Salary)}
          >
            <Card.Body>
              <Card.Title>{Rent.text}</Card.Title>
              <Card.Text>{Rent.amount} PLN</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Transactions this month: </small>
            </Card.Footer>
            <Button type="submit" value="Send">
              Add
            </Button>
          </div>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>{Salary.text}</Card.Title>
            <Card.Text>{Salary.amount} PLN</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Transactions this month:</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>{Subscriptions.text}</Card.Title>
            <Card.Text>{Subscriptions.amount} PLN</Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Transactions this month:</small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </Container>
  );
};

export default LazyInput;
