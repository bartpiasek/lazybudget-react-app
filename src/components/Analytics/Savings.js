import React, { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionListContext";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";

const Savings = () => {
  const [transactions] = useContext(TransactionsContext);
  const transactionsValues = Object.values(transactions);

  const sumTransactionValues = transactionsValues
    .reverse()
    .map((transaction) => transaction.amount);

  const SavingTransactionValues = transactionsValues
    .reverse()
    .map((transaction) => ({
      amount: transaction.amount,
      category: transaction.category,
    }));

  const savingsListTransaction = SavingTransactionValues.filter(
    (transaction) => {
      if (transaction.category === "saving") {
        return transaction.amount;
      }
    }
  );

  return (
    <Col>
      <h5>Savings</h5>
      {/* <h2>{Math.abs(savings).toFixed(2)} PLN</h2>
      <ProgressBar
        striped
        variant="danger"
        min={0}
        now={Math.abs(savings).toFixed(2)}
        max={3000}
        label={`${((Math.abs(savings).toFixed(2) / 7000) * 100).toFixed(2)}%`}
      /> */}
    </Col>
  );
};

export default Savings;
