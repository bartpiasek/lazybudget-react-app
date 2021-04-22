import React from "react";
import "../classes.css";

const TransactionRow = ({ text, amount, option, date }) => {
  return (
    <div className="transaction-container layout__container-background">
      <div className="transaction-row">
        <div className="transaction">
          <h5>{text}</h5>
        </div>
        <div className="transaction-data">
          <div>
            <p>{date}</p>
          </div>
          {option === "expense" ? (
            <p className="transaction-price red">{option}</p>
          ) : (
            <p className="transaction-price green">{option}</p>
          )}
          <p className="transaction-price">{amount.toFixed(2)} PLN</p>
        </div>
      </div>
    </div>
  );
};

export default TransactionRow;
