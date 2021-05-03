import React from "react";
import "../classes.css";

const TransactionRow = ({ text, amount, option, date, category, id }) => {
  return (
    <div className="transaction-container layout__container-background">
      <div className="transaction-row">
        <div className="transaction-text">
          <h5>{text}</h5>
        </div>
        <div className="transaction-data">
          <div>
            <p className="transaction-category">{category}</p>
          </div>
          <div>
            <p>{date.split("T")[0]}</p>
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
