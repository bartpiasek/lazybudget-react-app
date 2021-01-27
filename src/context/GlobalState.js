import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  transactions: [
    { id: 1, text: "Rent", amount: -750 },
    { id: 2, text: "Salary", amount: 3050 },
    { id: 3, text: "Grocery", amount: -50 },
    { id: 4, text: "Books", amount: -80 },
  ],
};

//create context
export const GlobalContext = createContext(initialState);

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
      }}
    >
      {/* children - everything in wrap - components etc */}
      {children}
    </GlobalContext.Provider>
  );
};
