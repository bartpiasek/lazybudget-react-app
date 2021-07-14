import React, { useState, useRef } from "react";
import "../components/classes.scss";
import { useAuth } from "../context/Auth";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords don't match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col md={6}>
          <Card className="element-background">
            <h2>Sign Up</h2>
            {currentUser ? (
              <p>
                Logged in as
                <strong>{currentUser && currentUser.email}</strong>
              </p>
            ) : null}
            <Form onSubmit={handleSubmit} className="form">
              {error && <Alert variant="danger">{error}</Alert>}
              <Form.Group id="email">
                <Form.Control
                  required
                  size="lg"
                  placeholder="Email"
                  className="element-background"
                  type="email"
                  ref={emailRef}
                />
              </Form.Group>
              <Form.Group id="password">
                <Form.Control
                  required
                  size="lg"
                  placeholder="Password"
                  className="element-background"
                  type="password"
                  ref={passwordRef}
                />
              </Form.Group>
              <Form.Group id="password-confirm">
                <Form.Control
                  required
                  size="lg"
                  placeholder="Confirm password"
                  className="element-background"
                  type="password"
                  ref={passwordConfirmRef}
                />
              </Form.Group>
              <Button
                disabled={loading}
                className="element-background"
                type="submit"
              >
                Sign Up
              </Button>
            </Form>
            <hr />
            <div>
              Already have an account? <Link to="/login">Log In</Link>
            </div>
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
