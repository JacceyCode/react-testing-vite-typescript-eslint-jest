import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Application } from "./application";

describe("Application", () => {
  test("renders correctly", () => {
    render(<Application />);

    const pageHeading = screen.getByRole("heading", {
      //   name: /job application form/i,
      level: 1,
    });
    const sectionHeading = screen.getByRole("heading", {
      //   name: /section 1/i,
      level: 2,
    });
    const nameElement = screen.getByRole("textbox", {
      name: /name/i,
    });
    const bioElement = screen.getByRole("textbox", {
      name: /biography/i,
    });
    const jobLocationElement = screen.getByRole("combobox");
    const termsElement = screen.getByRole("checkbox");
    const submitButtonElement = screen.getByRole("button");

    expect(pageHeading).toBeInTheDocument();
    expect(sectionHeading).toBeInTheDocument();
    expect(nameElement).toBeInTheDocument();
    expect(bioElement).toBeInTheDocument();
    expect(jobLocationElement).toBeInTheDocument();
    expect(termsElement).toBeInTheDocument();
    expect(submitButtonElement).toBeInTheDocument();

    //getByLabelText method
    const nameElement2 = screen.getByLabelText(/name/i);
    expect(nameElement2).toBeInTheDocument();
  });

  //   const termsElement2 = screen.getByLabelText(
  //     "I agree to the terms and conditions"
  //   );
  //   expect(termsElement2).toBeInTheDocument();

  //getByPlaceholderText method
  //   const nameElement3 = screen.getByPlaceholderText("Fullname");
  //   expect(nameElement3).toBeInTheDocument();

  //getByText method
  //   const paragraphElement = screen.getByText("All fields are mandatory");
  //   expect(paragraphElement).toBeInTheDocument();
});
