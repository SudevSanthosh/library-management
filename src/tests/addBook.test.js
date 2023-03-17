import { render, screen, fireEvent } from "@testing-library/react";
import AddBook from "../components/AddBook";
import "@testing-library/jest-dom";

describe("Add book component", () => {
  test("renders without crashing", () => {
    render(<AddBook />);
  });
});

describe("Add Book Component", () => {
  test("renders AddBook component", () => {
    render(<AddBook />);
    const addButton = screen.getByRole("button");
    expect(addButton).toBeInTheDocument();
  });

  test("form submit adds new book to the list", () => {
    render(<AddBook />);
    const titleInput = screen.getByPlaceholderText(
      "Enter the title of the book"
    );
    const aboutInput = screen.getByPlaceholderText("About the book");
    const addButton = screen.getByRole("button");

    fireEvent.change(titleInput, {
      target: { value: "The Catcher in the Rye" },
    });
    fireEvent.change(aboutInput, {
      target: { value: "A novel by J.D. Salinger" },
    });
    fireEvent.click(addButton);

    const newBookTitle = screen.getByText("The Catcher in the Rye");
    expect(newBookTitle).toBeInTheDocument();
  });
});
