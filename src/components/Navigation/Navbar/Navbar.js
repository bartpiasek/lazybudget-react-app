import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import lazybudgetLogo from "../../../assets/svg/006-wallet.svg";
import { useAuth } from "../../../context/Auth";
import "../../classes.css";

import NavbarBootstrap from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

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
    <NavbarBootstrap className="navbar-main" sticky="top">
      <NavbarBootstrap.Brand href="/">
        <img
          alt=""
          src={lazybudgetLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
      </NavbarBootstrap.Brand>
      <Nav className="mr-auto">
        {currentUser ? (
          <>
            <Link className="button-navbar" to="/analytics">
              Analytics
            </Link>
            <Link className="button-navbar" to="/lazy">
              Lazy
            </Link>
            <Link className="button-navbar" to="/account">
              Wallet
            </Link>
            <Button className="button-navbar" onClick={handleLogout}>
              Logout
            </Button>
            <p className="button-navbar">
              <strong>{currentUser && currentUser.email}</strong>
            </p>
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
    </NavbarBootstrap>
  );
}

export default Navbar;
