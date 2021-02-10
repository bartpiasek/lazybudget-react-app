import React from "react";
import Summary from "../Main/Summary/Summary";
import { LazyInput } from "../Main/LazyInput/LazyInput";

const Layout = () => {
  return (
    <div className="layout__section">
      <div className="layout__wrapper">
        <div className="layout__container">
          <Summary />
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
