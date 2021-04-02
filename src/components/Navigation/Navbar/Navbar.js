import React, { useState } from "react";
import { Link } from "react-router-dom";
import lazybudgetLogo from "../../../assets/svg/006-wallet.svg";

import NavbarBootstrap from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/esm/Button";
import { IoAnalytics } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";

import "../../classes.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClicked = () => setClicked(!clicked);

  return (
    <NavbarBootstrap className="navbar-main" sticky="top">
      <NavbarBootstrap.Brand href="#home">
        <img
          alt=""
          src={lazybudgetLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />
      </NavbarBootstrap.Brand>
      <Nav className="mr-auto">
        <Link className="button" to="#account">
          <IoAnalytics /> Analytics
        </Link>
        <Link className="button" to="/lazy">
          Lazy
        </Link>
        <Link className="button" to="#account">
          <VscAccount /> My Account
        </Link>
      </Nav>
    </NavbarBootstrap>
  );
}

export default Navbar;
