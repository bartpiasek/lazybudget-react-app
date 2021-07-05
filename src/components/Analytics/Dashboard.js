import React, { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionListContext";
import Expenses from "./Expenses";
import Incomes from "./Incomes";
import Total from "./Total";
import Savings from "./Savings";
import "../classes.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import FormBootstrap from "react-bootstrap/Form";

const Dashboard = () => {
  const [transactions] = useContext(TransactionsContext);
  return (
    <Container>
      <Row>
        <Col>
          <Total />
        </Col>
        <Col>
          <Expenses />
        </Col>
        <Col>
          <Incomes />
        </Col>
        <Col>
          <Savings />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h5>Goals</h5>
          <FormBootstrap.Group>
            <FormBootstrap.Control
              required
              size="sm"
              placeholder="Expenses goal"
              className="layout__container-background"
              type="text"
              // value={}
              role="setexpenses-input"
            />
            <FormBootstrap.Control
              required
              size="sm"
              placeholder="Incomes goal"
              className="layout__container-background"
              type="text"
              // value={}
              role="setincomes-input"
            />
            <FormBootstrap.Control
              required
              size="sm"
              placeholder="Savings goal"
              className="layout__container-background"
              type="text"
              // value={}
              role="setsavings-input"
            />
          </FormBootstrap.Group>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
