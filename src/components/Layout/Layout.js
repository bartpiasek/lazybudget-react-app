import React from "react";

import Summary from "../Main/Summary/Summary";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import History from "../History/History";

const Layout = () => {
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <Summary />
        </Col>
        <Col sm={4}> </Col>
      </Row>
      <Row>
        <Col sm>
          <History />
        </Col>
      </Row>
    </Container>
  );
};
export default Layout;
