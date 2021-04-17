import React from "react";
import { Form } from "../Form/AddTransactionForm";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Summary = () => {
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
