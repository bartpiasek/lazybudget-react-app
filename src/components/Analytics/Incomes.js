import React, { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionListContext";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";

const Incomes = () => {
  const [transactions] = useContext(TransactionsContext);
  const transactionsValues = Object.values(transactions);

  const sumTransactionValues = transactionsValues
    .reverse()
    .map((transaction) => transaction.amount);

  const incomes = sumTransactionValues
    .filter((amount) => amount > 0)
    .reduce((a, b) => a + b, 0);

  return (
    <Col>
      <h5>Incomes</h5>
      <h2>{incomes.toFixed(2)} PLN</h2>
      <ProgressBar
        striped
        variant="success"
        min={0}
        now={incomes.toFixed(2)}
        max={10000}
        label={`${((incomes.toFixed(2) / 10000) * 100).toFixed(2)}%`}
      />
    </Col>
  );
};

export default Incomes;
