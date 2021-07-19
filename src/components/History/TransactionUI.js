import React from "react";
import "../classes.scss";

const TransactionRow = ({ text, amount, option, date, category, id }) => {
  return (
    <div className="transaction-container element-background">
      <div className="transaction-row">
        <div className="text">
          <h5>{text}</h5>
        </div>
        <div>
          <p className="category">{category}</p>
        </div>
        <div className="date">
          <p>{date.split("T")[0]}</p>
        </div>
        {option === "expense" ? (
          <p className="price red">{option}</p>
        ) : (
          <p className="price green">{option}</p>
        )}
        <p className="price">{amount.toFixed(2)} PLN</p>
      </div>
    </div>
  );
};

export default TransactionRow;
