import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ProgressBar from "react-bootstrap/ProgressBar";
import Total from "./Total";

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h5>Total</h5>
          {/* <h2>{total} PLN</h2> */}
          {/* <Total total={total} /> */}
        </Col>
        {/* <Col>
          <h5>Expenses</h5>
          <h2>{Math.abs(expenses).toFixed(2)} PLN</h2>
          <ProgressBar
            striped
            variant="danger"
            min={0}
            now={Math.abs(expenses).toFixed(2)}
            max={3000}
            label={`${((Math.abs(expenses).toFixed(2) / 3000) * 100).toFixed(
              2
            )}%`}
          />
        </Col>
        <Col>
          <h5>Incomes</h5>
          <h2>{incomes.toFixed(2)} PLN</h2>
          <ProgressBar
            striped
            variant="success"
            min={0}
            now={incomes.toFixed(2)}
            max={10000}
            label={`${((incomes.toFixed(2) / 10000) * 100).toFixed(2)}%`}
          />
        </Col> */}
      </Row>
      <Row>
        <Col></Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
