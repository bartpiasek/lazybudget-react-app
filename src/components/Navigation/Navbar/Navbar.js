import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import lazybudgetLogo from "../../../assets/svg/006-wallet.svg";
import { useAuth } from "../../../context/Auth";
import "../../classes.css";

import NavbarBootstrap from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";

function Navbar() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Failed to logout");
    }
  }

  return (
    <NavbarBootstrap
      collapseOnSelect
      className="navbar-main"
      expand="sm"
      sticky="top"
    >
      <Container>
        <NavbarBootstrap.Toggle aria-controls="responsive-navbar-nav" />
        <NavbarBootstrap.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {currentUser ? (
              <>
                <Link className="button-navbar" to="/">
                  <img alt="" src={lazybudgetLogo} width="30" height="30" />
                </Link>
                <Link className="button-navbar" to="/analytics">
                  Analytics
                </Link>
                <Link className="button-navbar" to="/lazy">
                  Lazy
                </Link>
                <Dropdown>
                  <div className="mt-2">
                    <Dropdown.Toggle
                      variant="flat"
                      className="button-navbar"
                      id="dropdown-basic"
                    >
                      <p>
                        <strong>{currentUser && currentUser.email}</strong>
                      </p>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item>Settings</Dropdown.Item>
                      <Dropdown.Item onClick={handleLogout}>
                        Logout
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </div>
                </Dropdown>
              </>
            ) : (
              <>
                <Link className="button-navbar" to="/signup">
                  Sign Up
                </Link>
                <Link className="button-navbar" to="/login">
                  Log In
                </Link>
              </>
            )}
          </Nav>
        </NavbarBootstrap.Collapse>
      </Container>
    </NavbarBootstrap>
  );
}

export default Navbar;
