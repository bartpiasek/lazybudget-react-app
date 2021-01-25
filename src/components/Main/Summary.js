import react from "react";
import { Link } from "react-router-dom";
import Form from "./Form/Form";

const Summary = () => {
  return (
    <div className="pricing__container-card">
      <div className="pricing__container-cardInfo">
        <h3>Total balance PLN</h3>
        <p>infocard</p>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Summary;
