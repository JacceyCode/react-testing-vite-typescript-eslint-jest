import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Greet from "./greet";

// Test Driven Development: Test is written before the actual code.

describe("Greet", () => {
  test("Renders correctly", () => {
    render(<Greet />);

    const textEl = screen.getByText(/hello/i);
    expect(textEl).toBeInTheDocument();
  });

  test("Renders with a name", () => {
    render(<Greet name="Jay" />);

    const textEl = screen.getByText(/hello jay/i);
    expect(textEl).toBeInTheDocument();
  });
});
