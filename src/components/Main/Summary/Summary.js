import React from "react";
import { Form } from "../Form/AddTransactionForm";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Summary = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Form />
        </Col>
      </Row>
    </Container>
  );
};

export default Summary;
