import React from "react";
import "./Layout.css";
import Aux from "../../hoc/Aux";
import Summary from "../Main/Summary";
import History from "../History/History";
import { Income } from "../Main/Cashflow/Income";
import { Expenses } from "../Main/Cashflow/Expenses";

const Layout = () => {
  return (
    <Aux>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">Summary</h1>
          <Expenses />
          <Income />
          <div className="pricing__container">
            <Summary />
          </div>
          <div className="pricing__wrapper">
            <div className="pricing__container">
              <History />
            </div>
          </div>
        </div>
      </div>
    </Aux>
  );
};
export default Layout;
