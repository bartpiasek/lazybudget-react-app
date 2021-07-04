import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Total = ({ transactions }) => {
  const transactionsObj = Object.values(transactions);

  const transactionsAmount = transactionsObj
    .reverse()
    .map((transaction) => transaction.amount);

  const total = transactionsAmount.reduce((a, b) => a + b, 0);

  return (
    <Col>
      <h5>Total</h5>
      <h2>{total} PLN</h2>
    </Col>
  );
};

export default Total;
