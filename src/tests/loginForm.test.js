import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import LoginForm from "../components/LoginForm";

describe("Login Form component", () => {
  test("renders without crashing", () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
  });
});

describe("Components Visible", () => {
  test("Central Library Visible", () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    const data = screen.getByText("Welcome to Central Library");
    expect(data).toBeInTheDocument();
  });

  test("renders email and password input boxes", () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    const emailInput = screen.getByLabelText(/email address/i);
    const passwordInput = screen.getByLabelText(/password/i);
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    const dropdown = screen.getByLabelText(/select user type/i);
    const submitButton = screen.getByRole("button", { name: /sign in/i });
    expect(dropdown).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("Components Visible", () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
  });
});
describe("handleOptionSelect", () => {
  test("updates selectedOption state correctly", () => {
    render(
      <BrowserRouter>
        <LoginForm />
      </BrowserRouter>
    );
    const dropdown = screen.getByLabelText(/select user type/i);
    fireEvent.change(dropdown, { target: { value: "Student" } });
    expect(dropdown).toHaveValue("Student");
  });
});
