import React, { useState } from "react";
import lazybudgetLogo from "../../../assets/svg/006-wallet.svg";

import NavbarBootstrap from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClicked = () => setClicked(!clicked);

  return (
    <NavbarBootstrap bg="light" variant="light" sticky="top">
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
        <Nav.Link href="#account">Account</Nav.Link>
        <Nav.Link href="#incomes">Incomes</Nav.Link>
        <Nav.Link href="#expenses">Expenses</Nav.Link>
        <Nav.Link href="lazyinput">Lazy</Nav.Link>
      </Nav>
    </NavbarBootstrap>
  );
}

export default Navbar;
