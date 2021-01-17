import react from "react";
import { Link } from "react-router-dom";
import "./LazyInputCard.css";

const LazyInputCard = () => {
  return (
    <div className="pricing__container-card">
      <div className="pricing__container-cardInfo">
        <h3>Rent</h3>
        <p>750 PLN</p>
      </div>
    </div>
  );
};

export default LazyInputCard;
