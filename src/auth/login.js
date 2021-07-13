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

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { currentUser, login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }
    setLoading(false);
  }

  return (
    <Container>
      <Row>
        <Col></Col>
        <Col md={6}>
          <Card>
            <h2>Log In</h2>
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
              <Button disabled={loading} className="button" type="submit">
                Log In
              </Button>
            </Form>
            <hr />
            <div>
              Don't have an account? <Link to="/signup">Sign Up</Link>
            </div>
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default Login;
