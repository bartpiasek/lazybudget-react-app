import React from "react";
import "./Layout.css";
import Cards from "./Cards/Cards";
import Aux from "../../hoc/Aux";
import Main from "../Main/Main";

const Layout = () => {
  return (
    <Aux>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">Summary</h1>
          <div className="pricing__container">
            <Main />
          </div>
        </div>
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">Incomes</h1>
          <div className="pricing__container">
            <Cards />
          </div>
        </div>
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">Expenses</h1>
          <div className="pricing__container">
            <Cards />
          </div>
        </div>
      </div>
    </Aux>
  );
};
export default Layout;
