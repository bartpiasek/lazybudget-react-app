import React from "react";
import "./Layout.css";
import Cards from "./Cards/Cards";

const Layout = () => {
  return (
    <div className="pricing__section">
      <div className="pricing__wrapper">
        <h1 className="pricing__heading">Income</h1>
        <div className="pricing__container">
          <Cards />
        </div>
      </div>
      <div className="pricing__wrapper">
        <h1 className="pricing__heading">Summary</h1>
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
  );
};
export default Layout;
