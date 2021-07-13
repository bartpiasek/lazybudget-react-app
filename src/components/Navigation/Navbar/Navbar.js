import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import lazybudgetLogo from "../../../assets/svg/006-wallet.svg";
import { useAuth } from "../../../context/Auth";
import "../../classes.scss";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import DarkModeToggle from "../../DarkMode/DarkModeToggle";

function NavbarMain() {
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
    <Navbar collapseOnSelect className="navbar" expand="sm" sticky="top">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
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
                  LazyMode
                </Link>
                <Dropdown>
                  <div>
                    <Dropdown.Toggle
                      variant="flat"
                      id="dropdown-basic"
                      className="button-navbar"
                    >
                      <p className="button-navbar">
                        <strong>{currentUser && currentUser.email}</strong>
                      </p>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="button-navbar">
                      <Dropdown.Item>
                        <DarkModeToggle />
                      </Dropdown.Item>
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
