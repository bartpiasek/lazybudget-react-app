import React, { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionListContext";
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
      <h6>Total</h6>
      <h3>{total.toFixed(2)} PLN</h3>
      <hr />
    </Col>
  );
};

export default Total;
