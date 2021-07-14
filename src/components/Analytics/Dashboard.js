import React, { useContext, useState } from "react";
import { TransactionsContext } from "../../context/TransactionListContext";
import Expenses from "./Expenses";
import Incomes from "./Incomes";
import Total from "./Total";
import Savings from "./Savings";
import "../classes.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FormBootstrap from "react-bootstrap/Form";

const Dashboard = () => {
  const [transactions] = useContext(TransactionsContext);

  const [incomeGoal, setIncomeGoal] = useState({});
  const [expenseGoal, setExpenseGoal] = useState({});
  const [savingGoal, setSavingGoal] = useState({});

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
        <Col>
          <Savings />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h5>Goals</h5>
          <FormBootstrap.Group>
            <p>Your current goal:</p>
            <FormBootstrap.Control
              required
              size="sm"
              placeholder="Set new goal"
              className="element-background"
              type="text"
              value={expenseGoal.value}
              role="setexpenses-input"
            />
            <Button
              onClick={(e) => setExpenseGoal(e.target.value)}
              variant="flat"
              className="button"
            >
              Save
            </Button>
          </FormBootstrap.Group>
          <FormBootstrap.Group>
            <p>Your current goal:</p>
            <FormBootstrap.Control
              required
              size="sm"
              placeholder="Set new goal"
              className="element-background"
              type="text"
              value={incomeGoal.value}
              role="setincomes-input"
            />
            <Button
              onClick={(e) => setIncomeGoal(e.target.value)}
              variant="flat"
              className="button"
            >
              Save
            </Button>
          </FormBootstrap.Group>
          <FormBootstrap.Group>
            <p>Your current goal:</p>
            <FormBootstrap.Control
              required
              size="sm"
              placeholder="Set new goal"
              className="element-background"
              type="text"
              value={savingGoal.value}
              role="setsavings-input"
            />
            <Button
              onClick={(e) => setSavingGoal(e.target.value)}
              variant="flat"
              className="button"
            >
              Save
            </Button>
          </FormBootstrap.Group>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
