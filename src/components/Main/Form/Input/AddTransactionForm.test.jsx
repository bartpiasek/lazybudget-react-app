import { render, screen } from "@testing-library/react";
import { Form } from "../AddTransactionForm";

describe("Form", () => {
  render(<Form />);
  test("Add expense with category 'Bills' with positive number", () => {});

  test("Add expense with category 'Bills' with negative number", () => {});

  test("Add income with category 'Misc' with positive number", () => {});

  test("Add income with category 'Misc' with negative number", () => {});
});
