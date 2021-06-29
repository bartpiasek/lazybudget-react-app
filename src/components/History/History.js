import React, { useState, useEffect } from "react";
import "../classes.css";

import TransactionRow from "./TransactionUI";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

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

  return (
    <Container>
      <Row>
        <Col>
          <h5>Total</h5>
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
                  <Button className="button-sort" variant="sort">
                    This month
                  </Button>
                  <Button className="button-sort" variant="sort">
                    Expense
                  </Button>
                  <Button className="button-sort" variant="sort">
                    Income
                  </Button>
                  <Button className="button-sort" variant="sort">
                    Asc
                  </Button>
                  <Button className="button-sort" variant="sort">
                    Desc
                  </Button>
                </div>
                <div className="table">
                  {transactionsObj.map((transaction, key) => {
                    return (
                      <div key={key}>
                        <TransactionRow
                          key={transaction.id}
                          text={transaction.text}
                          amount={transaction.amount}
                          option={transaction.option}
                          date={transaction.date}
                          category={transaction.category}
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
