import React, { useState, createContext } from "react";

export const CashflowContext = createContext();

export const CashflowProvider = (props) => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [incomeGoal, setIncomeGoal] = useState(15077);
  const [expenseGoal, setExpenseGoal] = useState(6706);
  const [savingGoal, setSavingGoal] = useState({});

  const value = {
    incomeGoal,
    setIncomeGoal,
    expenseGoal,
    setExpenseGoal,
    savingGoal,
    setSavingGoal,
  };

  return (
    <CashflowContext.Provider value={value}>
      {props.children}
    </CashflowContext.Provider>
  );
};
