import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import StudentList from "../pages/StudentList";

describe("Student List component", () => {
  test("renders without crashing", () => {
    render(<StudentList />);
  });

  test("renders the header", () => {
    render(<StudentList />);
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  test("renders the student list", () => {
    render(<StudentList />);
    const studentList = screen.getByRole("table");
    expect(studentList).toBeInTheDocument();
  });
});
describe("Student List Table", () => {
  test("renders the student table data correctly", () => {
 
    render(<StudentList />);
    const studentRows = screen.getAllByRole("row");
    expect(studentRows[0]).toHaveTextContent("#");
    expect(studentRows[0]).toHaveTextContent("Name");
    expect(studentRows[0]).toHaveTextContent("Roll No");
    expect(studentRows[0]).toHaveTextContent("Department");
    expect(studentRows[0]).toHaveTextContent("Book Collected");
    
    
  });
});
