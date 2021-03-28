import React from "react";

const TransactionRow = ({ id, text, amount, option }) => {
  return (
    <div>
      <div>
        <p>{option}</p>
        <p>{text}</p>
        <p>{amount}</p>
        <p>{id}</p>
      </div>
    </div>
  );
};

export default TransactionRow;
