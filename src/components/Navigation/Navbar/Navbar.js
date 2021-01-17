import React, { useState } from "react";
import lazybudgetLogo from "../../../assets/svg/006-wallet.svg";
import { Link } from "react-router-dom";
import { VscListSelection, VscClose } from "react-icons/vsc";
import {
  BsArrowUpDown,
  BsBoxArrowInDown,
  BsBoxArrowInUp,
  BsSquare,
  BsBoundingBoxCircles,
} from "react-icons/bs";
import "./Navbar.css";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClicked = () => setClicked(!clicked);
  return (
    <div className="navbar">
      <div className="navbar-container container">
        <Link to="/" className="navbar-logo">
          <img src={lazybudgetLogo} alt="lazybudget" height="40" width="40" />
        </Link>
        <div className="menu-icon" onClick={handleClicked}>
          {clicked ? <VscClose /> : <VscListSelection />}
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              <BsBoundingBoxCircles />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/income" className="nav-links">
              <BsBoxArrowInDown />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/expenses" className="nav-links">
              <BsBoxArrowInUp />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/history" target="_blank" className="nav-links">
              <BsArrowUpDown />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
