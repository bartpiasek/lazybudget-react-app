import React, { useState } from "react";
import { Link } from "react-router-dom";
import lazybudgetLogo from "../../../assets/svg/006-wallet.svg";

import NavbarBootstrap from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "../../classes.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClicked = () => setClicked(!clicked);

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
        <Link className="button-navbar" to="/analytics">
          Analytics
        </Link>
        <Link className="button-navbar" to="/lazy">
          Lazy
        </Link>
        <Link className="button-navbar" to="/account">
          My Account
        </Link>
        <Link className="button-navbar" to="/signup">
          Sign Up
        </Link>
      </Nav>
    </NavbarBootstrap>
  );
}

export default Navbar;
