import React from "react";
import Summary from "../Main/Summary";
import { Income } from "../Main/Cashflow/Income";
import { Expenses } from "../Main/Cashflow/Expenses";
import classes from "./Layout.css";
import { LazyInput } from "../Main/LazyInput/LazyInput";

const Layout = () => {
  return (
    <div className={classes.LayoutSection}>
      <div className={classes.LayoutWrapper}>
        <h1 className={classes.LayoutHeading}>Summary</h1>
        <Expenses />
        <Income />
        <div className={classes.LayoutContainer}>
          <Summary />
        </div>
        <div className={classes.LayoutWrapper}>
          <div className={classes.LayoutContainer}>
            <LazyInput />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Layout;
