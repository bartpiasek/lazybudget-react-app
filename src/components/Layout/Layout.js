import React from "react";
import "./Layout.css";
import Aux from "../../hoc/Aux";
import Summary from "../Main/Summary";

const Layout = () => {
  return (
    <Aux>
      <div className="pricing__section">
        <div className="pricing__wrapper">
          <h1 className="pricing__heading">Summary</h1>
          <div className="pricing__container">
            <Summary />
          </div>
        </div>
      </div>
    </Aux>
  );
};
export default Layout;
