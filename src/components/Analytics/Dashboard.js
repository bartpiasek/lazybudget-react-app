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

  const [incomeGoal, setIncomeGoal] = useState(12000);
  const [expenseGoal, setExpenseGoal] = useState(5000);
  const [savingGoal, setSavingGoal] = useState({});

  // CONTEXT API CASHFLOW

  return (
    <Container>
      <Row>
        <Col>
          <Total />
        </Col>
        <Col>
          <Expenses max={expenseGoal} />
        </Col>
        <Col>
          <Incomes max={incomeGoal} />
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
              value={expenseGoal}
              role="setexpenses-input"
              onChange={(e) => setExpenseGoal(e.target.value)}
            />
            <Button
              onSubmit={(e) => setExpenseGoal(e.target.value)}
              value={expenseGoal.value}
              key={expenseGoal.key}
              type="submit"
              variant="flat"
              className="button element-background"
            >
              Set new goal
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
              value={incomeGoal}
              role="setincomes-input"
              onChange={(e) => setIncomeGoal(e.target.value)}
            />
            <Button
              onSubmit={(e) => setIncomeGoal(e.target.value)}
              value={incomeGoal.value}
              key={incomeGoal.key}
              type="submit"
              variant="flat"
              className="button element-background"
            >
              Set new goal
            </Button>
          </FormBootstrap.Group>
          <FormBootstrap.Group>
            <p>Your current goal:</p>
            <FormBootstrap.Control
              required
              size="sm"
              placeholder="Set new goal"
              className="button element-background"
              type="text"
              value={savingGoal}
              role="setsavings-input"
            />
            <Button
              onSubmit={(e) => setSavingGoal(e.target.value)}
              variant="flat"
              className="button element-background"
            >
              Set new goal
            </Button>
          </FormBootstrap.Group>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
