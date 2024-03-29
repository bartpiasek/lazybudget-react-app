import React, { useContext } from "react";
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
import { CashflowContext } from "../../context/CashflowContext";

const Dashboard = () => {
  const {
    incomeGoal,
    setIncomeGoal,
    expenseGoal,
    setExpenseGoal,
    savingGoal,
    setSavingGoal,
  } = useContext(CashflowContext);

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
          <Savings max={savingGoal} />
        </Col>
      </Row>
      <hr />
      <Row>
        <Col>
          <h5>Goals</h5>
          <FormBootstrap.Group>
            <p>Your current spending target:</p>
            <FormBootstrap.Control
              required
              size="sm"
              placeholder="Set new goal"
              className="element-darkmode"
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
              className="button-sort element-darkmode"
            >
              Save
            </Button>
          </FormBootstrap.Group>
          <FormBootstrap.Group>
            <p>Your current income target:</p>
            <FormBootstrap.Control
              required
              size="sm"
              placeholder="Set new goal"
              className="element-darkmode"
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
              className="button-sort element-darkmode"
            >
              Save
            </Button>
          </FormBootstrap.Group>
          <FormBootstrap.Group>
            <p>Your current saving target:</p>
            <FormBootstrap.Control
              required
              size="sm"
              placeholder="Set new goal"
              className="element-darkmode"
              type="text"
              value={savingGoal}
              role="setsavings-input"
              onChange={(e) => setSavingGoal(e.target.value)}
            />
            <Button
              onSubmit={(e) => setSavingGoal(e.target.value)}
              value={savingGoal.value}
              key={savingGoal.key}
              type="submit"
              variant="flat"
              className="button-sort element-darkmode"
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
