import React from "react";
import Summary from "../Main/Summary/Summary";
import { LazyInput } from "../Main/LazyInput/LazyInput";

import History from "../History/History";
import Income from "../Main/Cashflow/Income";
import Expense from "../Main/Cashflow/Expenses";

const Layout = () => {
  return (
    <div className="layout__section">
      <div className="layout__wrapper">
        <div className="layout__container">
          <Income />
          <Summary />
          <Expense />
          <History />
        </div>
        <div className="layout__wrapper">
          <div className="layout__container">
            <LazyInput />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
