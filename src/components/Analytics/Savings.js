import React, { useContext } from "react";
import { TransactionsContext } from "../../context/TransactionListContext";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";

const Savings = () => {
  const [transactions] = useContext(TransactionsContext);
  const transactionsKeys = Object.keys(transactions);
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
  console.log(SavingTransactionValues);

  // if category == "saving". filter amount
  // SavingTransactionValues === "saving" ? SavingTransactionValues.filter((amount) => amount > 0.reduce((a,b)=> a+b,0)
  const savings =
    SavingTransactionValues.category === "saving"
      ? SavingTransactionValues.filter((amount) => amount > 0).reduce(
          (a, b) => a + b,
          0
        )
      : null;
  console.log(savings);

  //   const savings = SavingTransactionValues.filter(
  //     (category) => category === "saving"
  //   ).reduce((a, b) => a + b, 0);

  return (
    <Col>
      <h5>Savings</h5>
      <h2>{Math.abs(savings).toFixed(2)} PLN</h2>
      <ProgressBar
        striped
        variant="danger"
        min={0}
        now={Math.abs(savings).toFixed(2)}
        max={3000}
        label={`${((Math.abs(savings).toFixed(2) / 7000) * 100).toFixed(2)}%`}
      />
    </Col>
  );
};

export default Savings;
