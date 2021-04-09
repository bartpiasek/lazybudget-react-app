import React, { useState, useEffect, useRef } from "react";
import "../components/classes.css";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col md={6}>
          <Card>
            <h2>Sign Up</h2>
            <Form className="form">
              <Form.Group id="email">
                <Form.Control
                  size="lg"
                  placeholder="Email"
                  className="layout__container-background"
                  type="email"
                  required
                  ref={emailRef}
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Control
                  size="lg"
                  placeholder="Password"
                  className="layout__container-background"
                  type="password"
                  required
                  ref={passwordRef}
                />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Control
                  size="lg"
                  placeholder="Confirm password"
                  className="layout__container-background"
                  type="password"
                  required
                  ref={passwordConfirmRef}
                />
              </Form.Group>
              <Button className="button" type="submit">
                Sign Up
              </Button>
            </Form>
            <hr />
            <div>Already have an account? Login</div>
            <h5>or</h5>
            <div>Use as anonymous</div>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Signup;
