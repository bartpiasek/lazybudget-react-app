import React from "react";
import { useAuth } from "../../context/Auth";

import Summary from "../Main/Summary/Summary";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import History from "../History/History";

const Layout = () => {
  const { currentUser } = useAuth();
  return (
    <Container>
      <p>
        Hello, <strong>{currentUser && currentUser.email}</strong>
      </p>
      <Row xs={1} md={1} lg={1}>
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
