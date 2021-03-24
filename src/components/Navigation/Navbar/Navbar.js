import React, { useState } from "react";
import lazybudgetLogo from "../../../assets/svg/006-wallet.svg";
import { Link, NavLink } from "react-router-dom";
import { VscListSelection, VscClose } from "react-icons/vsc";

function Navbar() {
  const [clicked, setClicked] = useState(false);
  const handleClicked = () => setClicked(!clicked);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={lazybudgetLogo} alt="lazybudget" height="40" width="40" />
        </Link>

        <div className="menu-icon" onClick={handleClicked}>
          {clicked ? <VscClose /> : <VscListSelection />}
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links">
              Account
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/income" className="nav-links">
              Incomes
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/expenses" className="nav-links">
              Expenses
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/history" target="_blank" className="nav-links">
              History
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
