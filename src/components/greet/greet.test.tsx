import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Greet from "./greet";

// Test Driven Development: Test is written before the actual code.

test("Greet renders correctly", () => {
  render(<Greet />);

  const textEl = screen.getByText(/hello/i);
  expect(textEl).toBeInTheDocument();
});

test("Greet renders with a name", () => {
  render(<Greet name="Jay" />);

  const textEl = screen.getByText(/hello jay/i);
  expect(textEl).toBeInTheDocument();
});
