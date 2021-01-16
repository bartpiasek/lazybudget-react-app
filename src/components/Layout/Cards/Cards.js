import React from "react";
import { Link } from "react-router-dom";

function Cards() {
  return (
    <Link to="/" className="pricing__container-card">
      <div className="pricing__container-cardInfo">
        <h3>fh</h3>
        <p>description</p>
        <ul className="pricing__container-features">
          <li>asdf</li>
        </ul>
      </div>
    </Link>
  );
}
export default Cards;
