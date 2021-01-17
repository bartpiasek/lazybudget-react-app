import react from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <Link to="/" className="pricing__container-card">
      <div className="pricing__container-cardInfo">
        <h3>Total balance PLN</h3>
        <p>infocard</p>
        <ul className="pricing__container-features">
          <li>asdf</li>
        </ul>
      </div>
      <hr />
      <div>
        <div>{/* List component */}</div>
      </div>
    </Link>
  );
};

export default Main;
