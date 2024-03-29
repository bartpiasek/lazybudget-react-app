import React, { useContext, useState } from "react";
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
  ThisMonth,
} from "./HistoryFilters";
import "../classes.scss";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { CashflowContext } from "../../context/CashflowContext";

const History = () => {
  // CONTEXT API STATES
  const { incomeGoal, expenseGoal } = useContext(CashflowContext);

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
                      className="button-sort element-darkmode"
                      variant="sort"
                    >
                      X
                    </Button>
                  ) : (
                    <Button
                      value="All"
                      onClick={(e) => setFilterHistory(e.target.value)}
                      className="button-sort element-darkmode"
                      variant="sort"
                    >
                      All
                    </Button>
                  )}

                  <Button
                    value="This month"
                    onClick={(e) => setFilterHistory(e.target.value)}
                    className="button-sort element-darkmode"
                    variant="sort"
                  >
                    This month
                  </Button>
                  <Button
                    value="Expense"
                    onClick={(e) => setFilterHistory(e.target.value)}
                    className="button-sort element-darkmode"
                    variant="sort"
                  >
                    Expense
                  </Button>
                  <Button
                    value="Income"
                    onClick={(e) => setFilterHistory(e.target.value)}
                    className="button-sort element-darkmode"
                    variant="sort"
                  >
                    Income
                  </Button>
                  <Button
                    value="Food"
                    onClick={(e) => setFilterHistory(e.target.value)}
                    className="button-sort element-darkmode"
                    variant="sort"
                  >
                    Food
                  </Button>
                  <Button
                    value="Housing"
                    onClick={(e) => setFilterHistory(e.target.value)}
                    className="button-sort element-darkmode"
                    variant="sort"
                  >
                    Housing
                  </Button>
                  <Button
                    value="Bills"
                    onClick={(e) => setFilterHistory(e.target.value)}
                    className="button-sort element-darkmode"
                    variant="sort"
                  >
                    Bills
                  </Button>
                  <Button
                    value="Entertainment"
                    onClick={(e) => setFilterHistory(e.target.value)}
                    className="button-sort element-darkmode"
                    variant="sort"
                  >
                    Entertainment
                  </Button>
                  <Button
                    value="Misc"
                    onClick={(e) => setFilterHistory(e.target.value)}
                    className="button-sort element-darkmode"
                    variant="sort"
                  >
                    Misc
                  </Button>
                  <Button
                    value="Savings"
                    onClick={(e) => setFilterHistory(e.target.value)}
                    className="button-sort element-darkmode"
                    variant="sort"
                  >
                    Savings
                  </Button>
                </div>
                {
                  <div>
                    {filterHistory === "All" && <AllFilter />}
                    {filterHistory === "Last 30 days" && <ThisMonth />}
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
