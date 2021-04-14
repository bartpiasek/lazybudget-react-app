import React from "react";
import "../classes.css";
import { VscChromeClose } from "react-icons/vsc";

const TransactionRow = ({ text, amount, option }) => {
  return (
    <div className="transaction-container layout__container-background">
      <div className="transaction-row">
        <div className="transaction">
          <h5>{text}</h5>
        </div>
        <div className="transaction-data">
          {option === "expense" ? (
            <p className="transaction-price red">{option}</p>
          ) : (
            <p className="transaction-price green">{option}</p>
          )}

          <p className="transaction-price">{amount.toFixed(2)} PLN</p>
        </div>
        <div>
          <VscChromeClose />
        </div>
      </div>
    </div>
  );
};

export default TransactionRow;
