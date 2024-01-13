import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Users } from "./user";
import { startServer } from "../../mocks/server";

describe("Users", () => {
  startServer();

  test("renders correctly", () => {
    render(<Users />);

    const textEl = screen.getByRole("heading", {
      level: 1,
    });
    expect(textEl).toHaveTextContent(/users/i);
  });

  test("renders a list of users", async () => {
    render(<Users />);

    const users = await screen.findAllByRole("listitem");
    expect(users).toHaveLength(3);
  });
});
