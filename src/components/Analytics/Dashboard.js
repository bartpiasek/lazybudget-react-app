import React, { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionListContext";
import Expenses from "./Expenses";
import Incomes from "./Incomes";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import Total from "./Total";

const Dashboard = () => {
  const [transactions] = useContext(TransactionsContext);
  return (
    <Container>
      <Row>
        <Col>
          <h5>Total</h5>
          <Total />
        </Col>
        <Col>
          <Expenses />
        </Col>
        <Col>
          <Incomes />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h5>Goals</h5>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
