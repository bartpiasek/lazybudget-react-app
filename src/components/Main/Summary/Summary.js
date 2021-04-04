import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { Form } from "../Form/AddTransactionForm";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Summary = () => {
  // const { transactions } = useContext(GlobalContext);

  // const amounts = transactions.map((transaction) => transaction.amount);
  // const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <Container>
      <Row>
        <Col sm={4}></Col>
        <Col sm={8}>
          <Form />
        </Col>
      </Row>
    </Container>
  );
};

export default Summary;
