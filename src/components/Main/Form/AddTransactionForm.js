import React from "react";
import classes from "./AddTransactionForm.css";

const Form = () => {
  return (
    <div>
      <form className={classes.form}>
        <select>
          <option value="Income">Income</option>
          <option value="Expense">Expense</option>
        </select>
        <input type="text" name="Category" placeholder="Category" />
        <input type="text" name="Amount" placeholder="PLN" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Form;
