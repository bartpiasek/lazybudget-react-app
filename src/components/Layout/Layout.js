import React from "react";

import { Form } from "../Main/Form/AddTransactionForm";
import History from "../History/History";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Layout = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Form />
        </Col>
      </Row>
      <Row>
        <Col>
          <History />
        </Col>
      </Row>
    </Container>
  );
};
export default Layout;
