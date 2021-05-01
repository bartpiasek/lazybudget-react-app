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
        <Col>
          <Summary />
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
