import React from "react";
import Form from "./Form/AddTransactionForm";

const Summary = () => {
  return (
    <div className="pricing__container-card">
      <div className="pricing__container-cardInfo">
        <h3>Total balance</h3>
        <h3>3000 PLN</h3>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Summary;
