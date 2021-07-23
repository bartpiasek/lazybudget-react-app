import React, { useState, createContext } from "react";

export const CashflowContext = createContext();

export const CashflowProvider = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [incomeGoal, setIncomeGoal] = useState(12000);
  const [expenseGoal, setExpenseGoal] = useState(5000);
  const [savingGoal, setSavingGoal] = useState({});

  return (
    <CashflowContext.Provider value={[incomeGoal, expenseGoal, savingGoal]}>
      {props.children}
    </CashflowContext.Provider>
  );
};
