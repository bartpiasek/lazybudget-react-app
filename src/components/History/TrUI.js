import React from "react";

const TransactionRow = ({ id, text, amount, option }) => {
  return (
    <div>
      <div>
        <h5>{option}</h5>
        <h5>{text}</h5>
        <h5>{amount}</h5>
        <h5>{id}</h5>
      </div>
    </div>
  );
};

export default TransactionRow;
