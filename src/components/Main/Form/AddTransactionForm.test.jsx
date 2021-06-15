import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Form } from "./AddTransactionForm";

describe("Form", () => {
  render(<Form />);
  const textInput = screen.getByRole("text-input");
  const amountInput = screen.getByRole("amount-input");

  const expenseOption = screen.getByRole("cashflow-select", {
    value: "expense",
  });
  const incomeOption = screen.getByRole("cashflow-select", { value: "income" });

  const categoryBills = screen.getByRole("radio", { value: "bills" });

  test("Add expense with category 'Bills' with positive number", () => {
    // Make sure interest starts out at 0
    expect(amountInput).toHaveTextContent("");

    // Update amount to 30
    expect(expenseOption).toHaveValue("expense");
    // expect(categoryOption).toBeChecked();
    userEvent.type(amountInput, "30");
    // expect(amountInput).toHaveTextContent("30");
    // expect(amountInput).toHaveValue("30");
  });

  test("Add expense with category 'Bills' with negative number", () => {
    // Make sure interest starts out at 0
    expect(amountInput).toHaveTextContent("");
  });

  test("Add income with category 'Misc' with positive number", () => {
    // Make sure interest starts out at 0
    expect(amountInput).toHaveTextContent("");
  });

  test("Add income with category 'Misc' with negative number", () => {
    // Make sure interest starts out at 0
    expect(amountInput).toHaveTextContent("");
  });
});
