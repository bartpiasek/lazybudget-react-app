import React, { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionListContext";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";

const Savings = (max) => {
  const [transactions] = useContext(TransactionsContext);
  const transactionsValues = Object.values(transactions);

  const findTransactionSavings = transactionsValues.map((transaction) =>
    transaction.category === "saving" ? transaction.amount : null
  );
  const savings = findTransactionSavings.reduce((a, b) => a + b, 0);

  const maxValue = Object.values(max);

  return (
    <Col>
      <h6>Savings</h6>
      <h3>{Math.abs(savings).toFixed(2)} PLN</h3>
      <ProgressBar
        striped
        variant="info"
        min={0}
        now={savings}
        max={maxValue}
        label={`${((Math.abs(savings).toFixed(2) / maxValue) * 100).toFixed(
          2
        )}%`}
      />
    </Col>
  );
};

export default Savings;
