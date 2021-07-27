import React, { useState, createContext, useEffect } from "react";

export const CashflowContext = createContext();

export const CashflowProvider = (props) => {
  const [incomeGoal, setIncomeGoal] = useState(16000 || []);
  const [expenseGoal, setExpenseGoal] = useState(6706 || []);
  const [savingGoal, setSavingGoal] = useState(5000 || []);

  useEffect(() => {
    const localIncomeGoal = localStorage.getItem("local-incomeGoal");
    const localExpenseGoal = localStorage.getItem("local-expenseGoal");
    const localSavingGoal = localStorage.getItem("local-savingGoal");

    if (localIncomeGoal && localExpenseGoal && localSavingGoal) {
      setIncomeGoal(JSON.parse(localIncomeGoal));
      setExpenseGoal(JSON.parse(localExpenseGoal));
      setSavingGoal(JSON.parse(localSavingGoal));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("local-incomeGoal", JSON.stringify(incomeGoal));
    localStorage.setItem("local-expenseGoal", JSON.stringify(expenseGoal));
    localStorage.setItem("local-savingGoal", JSON.stringify(savingGoal));
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
