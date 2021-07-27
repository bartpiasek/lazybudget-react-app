import React, { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionListContext";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";

const Expenses = (max) => {
  const [transactions] = useContext(TransactionsContext);
  const transactionsValues = Object.values(transactions);

  const sumTransactionValues = transactionsValues
    .reverse()
    .map((transaction) => transaction.amount);

  const expenses = sumTransactionValues
    .filter((amount) => amount < 0)
    .reduce((a, b) => a + b, 0);

  const maxValue = Object.values(max);

  return (
    <Col>
      <h6>Expenses</h6>
      <h3>{Math.abs(expenses).toFixed(2)} PLN</h3>
      <ProgressBar
        striped
        variant="danger"
        min={0}
        now={Math.abs(expenses)}
        max={maxValue}
        label={`${((Math.abs(expenses).toFixed(2) / maxValue) * 100).toFixed(
          2
        )}%`}
      />
      <hr />
    </Col>
  );
};

export default Expenses;
