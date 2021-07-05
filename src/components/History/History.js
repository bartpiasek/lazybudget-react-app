import React, { useState, useEffect, useContext } from "react";
import { TransactionsContext } from "../../context/TransactionListContext";
import Total from "../Analytics/Total";
import Expenses from "../Analytics/Expenses";
import Incomes from "../Analytics/Incomes";
import "../classes.css";

import TransactionRow from "./TransactionUI";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";

const History = () => {
  const [transactions] = useContext(TransactionsContext);
  const transactionsValues = Object.values(transactions);
  const sumTransactionValues = transactionsValues
    .reverse()
    .map((transaction) => transaction.amount);

  return (
    <Container>
      <Row>
        <Col>
          <Total />
        </Col>
        <Col>
          <Expenses />
        </Col>
        <Col>
          <Incomes />
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
                  {transactionsValues.map((transaction, key) => {
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
