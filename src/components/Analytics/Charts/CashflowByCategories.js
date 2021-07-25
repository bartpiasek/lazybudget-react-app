import React, { useContext, useState } from "react";
import { TransactionsContext } from "../../context/TransactionListContext";
import { CashflowContext } from "../../context/CashflowContext";
import "../../Main/Data";
import { categories } from "../../Main/Data";
//IMPORT CONTEXTS

//CASHFLOW BY CATEGORIES
// LABELS:CATEGORIES
const labels = Object.values(categories);
console.log(labels);

function CashflowByCategories() {
  return <div></div>;
}

export default CashflowByCategories;
