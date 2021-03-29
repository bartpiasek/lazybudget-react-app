import React, { useState } from "react";
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
    <NavbarBootstrap
      className="navbar-main"
      bg="light"
      variant="light"
      sticky="top"
    >
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
        <button className="button" href="#account">
          <IoAnalytics /> Analytics
        </button>
        <button className="button" href="lazyinput">
          Lazy
        </button>
        <button className="button" href="#account">
          <VscAccount /> My Account
        </button>
      </Nav>
    </NavbarBootstrap>
  );
}

export default Navbar;
