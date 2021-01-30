import React from "react";

const Toggle = ({ checked, onChange }) => (
  <span className="toggle-control">
    <input
      className="dmcheck"
      type="checkbox"
      checked={checked}
      onChange={onchange}
      id="dmcheck"
    />
    <label htmlFor="dmcheck" />
  </span>
);

export default Toggle;
