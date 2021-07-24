import React, { useContext, useState } from "react";
import { TransactionsContext } from "../../context/TransactionListContext";
import Total from "../Analytics/Total";
import Expenses from "../Analytics/Expenses";
import Incomes from "../Analytics/Incomes";

import {
  AllFilter,
  IncomeFilter,
  ExpenseFilter,
  CategoryFoodFilter,
  CategoryBillsFilter,
  CategoryEntertainmentFilter,
  CategoryMiscFilter,
  CategorySavingsFilter,
  CategoryHousingFilter,
} from "./HistoryFilters";
import "../classes.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { CashflowContext } from "../../context/CashflowContext";

const History = () => {
  // CONTEXT API STATES
  const [transactions] = useContext(TransactionsContext);
  // const [incomeGoal] = useContext(CashflowContext);
  // const [expenseGoal] = useContext(CashflowContext);

  const { incomeGoal, expenseGoal } = useContext(CashflowContext);
  const transactionsValues = Object.values(transactions);
  const sumTransactionValues = transactionsValues
    .reverse()
    .map((transaction) => transaction.amount);

  //FILTER BEFORE, IN CONTEXT API - that re-renders Total, Expenses, Income component with filter conditions
  //...

  //FILTER UI IN COMPONENT
  const [filterHistory, setFilterHistory] = useState("All");

  return (
    <Container>
      <Row>
        <Col>
          <Incomes max={incomeGoal} />
        </Col>
        <Col>
          <Expenses max={expenseGoal} />
        </Col>
        <Col>
          <Total />
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <hr />
            <div>
              <div>
                <h5>Last transactions</h5>
                <div>
                  {filterHistory !== "All" ? (
                    <Button
                      value="All"
                      onClick={(e) => setFilterHistory(e.target.value)}
                      className="button-sort element-background"
                      variant="sort"
                    >
                      X
                    </Button>
                  ) : (
                    <Button
                      value="All"
                      onClick={(e) => setFilterHistory(e.target.value)}
                      className="button-sort element-background"
                      variant="sort"
                    >
                      All
                    </Button>
                  )}

                  <Button
                    className="button-sort element-background"
                    variant="sort"
                  >
                    This month
                  </Button>
                  <Button
                    value="Expense"
                    onClick={(e) => setFilterHistory(e.target.value)}
                    className="button-sort element-background"
                    variant="sort"
                  >
                    Expense
                  </Button>
                  <Button
                    value="Income"
                    onClick={(e) => setFilterHistory(e.target.value)}
                    className="button-sort element-background"
                    variant="sort"
                  >
                    Income
                  </Button>
                  <Button
                    value="Food"
                    onClick={(e) => setFilterHistory(e.target.value)}
                    className="button-sort element-background"
                    variant="sort"
                  >
                    Food
                  </Button>
                  <Button
                    value="Housing"
                    onClick={(e) => setFilterHistory(e.target.value)}
                    className="button-sort element-background"
                    variant="sort"
                  >
                    Housing
                  </Button>
                  <Button
                    value="Bills"
                    onClick={(e) => setFilterHistory(e.target.value)}
                    className="button-sort element-background"
                    variant="sort"
                  >
                    Bills
                  </Button>
                  <Button
                    value="Entertainment"
                    onClick={(e) => setFilterHistory(e.target.value)}
                    className="button-sort element-background"
                    variant="sort"
                  >
                    Entertainment
                  </Button>
                  <Button
                    value="Misc"
                    onClick={(e) => setFilterHistory(e.target.value)}
                    className="button-sort element-background"
                    variant="sort"
                  >
                    Misc
                  </Button>
                  <Button
                    value="Savings"
                    onClick={(e) => setFilterHistory(e.target.value)}
                    className="button-sort element-background"
                    variant="sort"
                  >
                    Savings
                  </Button>
                </div>
                {
                  <div>
                    {filterHistory === "All" && <AllFilter />}
                    {filterHistory === "Income" && <IncomeFilter />}
                    {filterHistory === "Expense" && <ExpenseFilter />}
                    {filterHistory === "Food" && <CategoryFoodFilter />}
                    {filterHistory === "Housing" && <CategoryHousingFilter />}
                    {filterHistory === "Bills" && <CategoryBillsFilter />}
                    {filterHistory === "Entertainment" && (
                      <CategoryEntertainmentFilter />
                    )}
                    {filterHistory === "Misc" && <CategoryMiscFilter />}
                    {filterHistory === "Savings" && <CategorySavingsFilter />}
                  </div>
                }
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default History;
