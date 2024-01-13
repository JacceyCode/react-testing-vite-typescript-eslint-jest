import { render, screen } from "../../test-utils";
import { MuiMode } from "./mui-mode";
// import "@testing-library/jest-dom";
// import { screen, render } from "@testing-library/react";
// import { AppProviders } from "../providers/app-providers";
// import user from "@testing-library/user-event";

describe("MuiMode", () => {
  test("renders text correctly", () => {
    // render(<MuiMode />, {
    //   wrapper: AppProviders,
    // });

    render(<MuiMode />);

    const headingEl = screen.getByRole("heading");
    expect(headingEl).toHaveTextContent(/dark mode/i);
  });
});
