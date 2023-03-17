import { render, screen } from "@testing-library/react";
import { Books } from "../components/Books";
import "@testing-library/jest-dom";

describe("Books component", () => {
  test("renders without crashing", () => {
    render(<Books />);
  });
});
test("renders search input boxes", () => {
  render(<Books />);
  const searchInput = screen.getByLabelText(/search/i);
   expect(searchInput).toBeInTheDocument();
});
