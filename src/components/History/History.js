import React, { useState, useEffect } from "react";

import TransactionRow from "./TrUI";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const History = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [transactions, setTransactions] = useState({});

  useEffect(() => {
    fetch("https://lazyinput-default-rtdb.firebaseio.com/transactions.json")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setTransactions(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [transactions]);

  const transactionsObj = Object.values(transactions);

  const transactionsAmount = transactionsObj
    .reverse()
    .map((transaction) => transaction.amount);

  const total = transactionsAmount.reduce((a, b) => a + b, 0);

  const expenses = transactionsAmount
    .filter((amount) => amount < 0)
    .reduce((a, b) => a + b, 0);

  const incomes = transactionsAmount
    .filter((amount) => amount > 0)
    .reduce((a, b) => a + b, 0);

  //FILTER TRANSACTION OBJ - EXPENSES/INCOMES - sorting
  const firebaseExpenses = transactionsObj.filter((transaction) => {
    return transaction.amount < 0;
  });

  const firebaseIncomes = transactionsObj.filter((transaction) => {
    return transaction.amount > 0;
  });

  return (
    <Container>
      <Row>
        <Col>
          <h5>Total balance</h5>
          <h2>{total.toFixed(2)} PLN</h2>
        </Col>
        <Col>
          <h5>Expenses</h5>
          <h2>{Math.abs(expenses).toFixed(2)} PLN</h2>
        </Col>
        <Col>
          <h5>Incomes</h5>
          <h2>{incomes.toFixed(2)} PLN</h2>
        </Col>
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
      <Row>
        <Col>
          <div>
            <hr />
            <div>
              <div>
                <h5>Last transactions</h5>
                <div>
                  {transactionsObj.map((transaction, key) => {
                    return (
                      <div key={key}>
                        <TransactionRow
                          key={transaction.id}
                          text={transaction.text}
                          amount={transaction.amount}
                          option={transaction.option}
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default History;
