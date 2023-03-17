import { Header } from "../components/Header";
import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";


describe("Header component", () => {
  test("renders without crashing", () => {
    render(<Header />);
  });
});

describe("Components Visible", () => {
  beforeEach(() => {
    const user = { name: "John Doe", isStudent: true };
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  });

  afterEach(() => {
    localStorage.removeItem("loggedInUser");
  });

  test("Central Library Visible", () => {
    render(<Header />);
    const data = screen.getByText("Central Library");
    expect(data).toBeInTheDocument();
  });
  test("Logout button visible", () => {
    render(<Header />);
    const data = screen.getByText("Logout");
    expect(data).toBeInTheDocument();
  });
  test("Home button visible", () => {
    render(<Header />);
    const data = screen.getByText("Home");
    expect(data).toBeInTheDocument();
  });
  test("Logout button clears local storage", () => {
    render(<Header />);
    const logoutButton = screen.getByText("Logout");
    fireEvent.click(logoutButton);
    expect(localStorage.getItem("loggedInUser")).toBeNull();
  });
});
