import React, { useState, createContext, useEffect } from "react";
import { useLocalStorage } from "./LocalStorage";

export const CashflowContext = createContext();

export const CashflowProvider = (props) => {
  const [incomeGoal, setIncomeGoal] = useState(15077 || []);
  const [expenseGoal, setExpenseGoal] = useState(6706 || []);
  const [savingGoal, setSavingGoal] = useState(5000 || []);

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
