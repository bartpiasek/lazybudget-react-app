import React from "react";

export default function history() {
  return (
    <div>
      <h3>Transaction history</h3>
      <ul id="list">
        <li>
          <span>+ 500PLN</span>
          <button className="delete">remove</button>
        </li>
      </ul>
    </div>
  );
}
