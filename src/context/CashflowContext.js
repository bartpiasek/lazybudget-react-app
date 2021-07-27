import React, { useState, createContext, useEffect } from "react";

export const CashflowContext = createContext();

export const CashflowProvider = (props) => {
  const [incomeGoal, setIncomeGoal] = useState(16000 || []);
  const [expenseGoal, setExpenseGoal] = useState(6706 || []);
  const [savingGoal, setSavingGoal] = useState(5000 || []);

  useEffect(() => {
    const localIncomeGoal = localStorage.getItem("local-incomeGoal");
    if (localIncomeGoal) {
      setIncomeGoal(JSON.parse(localIncomeGoal));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("local-incomeGoal", JSON.stringify(incomeGoal));
  });

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
