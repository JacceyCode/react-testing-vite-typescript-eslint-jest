import "@testing-library/jest-dom";
import { screen, render } from "@testing-library/react";
import { Skills } from "./skills";

describe("Skills", () => {
  const skills = ["HTML", "CSS", "JavaScript", "Jest"];

  test("renders correctly", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getByRole("list");
    expect(listElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);

    const listElement = screen.getAllByRole("listitem");
    expect(listElement).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);

    const loginButton = screen.getByRole("button", {
      name: /login/i,
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("Start learning button is not rendered", () => {
    render(<Skills skills={skills} />);

    const startButton = screen.queryByRole("button", {
      name: /start/i,
    });
    expect(startButton).not.toBeInTheDocument();
  });

  test("Start learning button is eventually rendered", async () => {
    render(<Skills skills={skills} />);

    const startButton = await screen.findByRole(
      "button",
      {
        name: /start/i,
      },
      {
        timeout: 2000,
      }
    );
    expect(startButton).toBeInTheDocument();
  });
});
