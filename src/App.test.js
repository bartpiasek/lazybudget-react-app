import { render, screen } from "@testing-library/react";
import App from "./App";
import Layout from "./components/Layout/Layout";

test("initial conditions", () => {
  render(<App />);
  // check the initial state of options
  const incomeExpenseSelect = screen.getByRole("select", { name: "expense" });
  expect(incomeExpenseSelect).toHaveValue();
});
