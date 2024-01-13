import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Counter } from "./counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);

    const countEl = screen.getByRole("heading");
    expect(countEl).toBeInTheDocument();

    const incrementBtn = screen.getByRole("button", {
      name: /increment/i,
    });
    expect(incrementBtn).toBeInTheDocument();
  });

  test("renders a count of 0", () => {
    render(<Counter />);

    const countEL = screen.getByRole("heading");
    expect(countEL).toHaveTextContent("0");
  });

  test("renders a count of 1 after clicking the increment button", async () => {
    render(<Counter />);

    const incrementBtn = screen.getByRole("button", {
      name: /increment/i,
    });
    await user.click(incrementBtn);
    const newCountEL = screen.getByRole("heading");
    expect(newCountEL).toHaveTextContent("1");
  });

  test("renders a count of 2 after clicking the increament button twice", async () => {
    render(<Counter />);

    const incrementBtn = screen.getByRole("button", {
      name: /increment/i,
    });
    await user.dblClick(incrementBtn);
    const newCountEL = screen.getByRole("heading");
    expect(newCountEL).toHaveTextContent("2");
  });

  test("renders a count of 10 after clicking the set button", async () => {
    render(<Counter />);

    const inputEL = screen.getByRole("spinbutton");
    await user.type(inputEL, "10");
    expect(inputEL).toHaveValue(10);

    const setBtn = screen.getByRole("button", {
      name: /set/i,
    });
    await user.click(setBtn);
    const newCountEL = screen.getByRole("heading");
    expect(newCountEL).toHaveTextContent("10");
  });

  test("elements are focused in the right order", async () => {
    render(<Counter />);

    const incrementBtn = screen.getByRole("button", {
      name: /increment/i,
    });
    const inputEL = screen.getByRole("spinbutton");
    const setBtn = screen.getByRole("button", {
      name: /set/i,
    });

    await user.tab();
    expect(incrementBtn).toHaveFocus();
    await user.tab();
    expect(inputEL).toHaveFocus();
    await user.tab();
    expect(setBtn).toHaveFocus();
  });
});
