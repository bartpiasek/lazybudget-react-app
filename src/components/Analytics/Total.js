import React, { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionListContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Total = () => {
  const [transactions] = useContext(TransactionsContext);
  const transactionsValues = Object.values(transactions);

  const sumTransactionValues = transactionsValues
    .reverse()
    .map((transaction) => transaction.amount);

  const total = sumTransactionValues.reduce((a, b) => a + b, 0);

  return (
    <Col>
      <h5>Total</h5>
      <h2>{total.toFixed(2)} PLN</h2>
    </Col>
  );
};

export default Total;
