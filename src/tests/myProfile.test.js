import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";

import MyProfile from "../pages/MyProfile";

describe("My Profile component", () => {
  test("renders without crashing", () => {
    render( <BrowserRouter>
      <MyProfile/>
    </BrowserRouter>);
  });
});


describe("MyProfile component", () => {
  test("renders 'No data found' message when no data is in localStorage", () => {
    localStorage.clear();
    render(
      <BrowserRouter>
        <MyProfile />
      </BrowserRouter>
    );
    expect(screen.getByText("No data found")).toBeInTheDocument();
  });

  test("renders 'Your books' header when data is in localStorage", () => {
    localStorage.setItem("bookHire", JSON.stringify([{ name: "Alice", value: "Harry Potter" }]));
    localStorage.setItem("loggedInUser", JSON.stringify({ name: "Alice" }));
    render(
      <BrowserRouter>
        <MyProfile />
      </BrowserRouter>
    );
    expect(screen.getByText("Your books")).toBeInTheDocument();
  });

  test("renders book title when data is in localStorage", () => {
    localStorage.setItem("bookHire", JSON.stringify([{ name: "Alice", value: "Harry Potter" }]));
    localStorage.setItem("loggedInUser", JSON.stringify({ name: "Alice" }));
    render(
      <BrowserRouter>
        <MyProfile />
      </BrowserRouter>
    );
    expect(screen.getByText("Harry Potter")).toBeInTheDocument();
  });

  test("handles book return when 'Return' button is clicked", () => {
    localStorage.setItem("bookHire", JSON.stringify([{ name: "Alice", value: "Harry Potter" }]));
    localStorage.setItem("loggedInUser", JSON.stringify({ name: "Alice" }));
    render(
      <BrowserRouter>
        <MyProfile />
      </BrowserRouter>
    );
    const returnButton = screen.getByText("Return");
    fireEvent.click(returnButton);
    expect(screen.queryByText("Harry Potter")).not.toBeInTheDocument();
  });
});
