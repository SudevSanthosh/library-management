import { render, screen } from '@testing-library/react';
import Card from '../components/Card';
import '@testing-library/jest-dom/extend-expect';


describe("Card component", () => {
  test("renders without crashing", () => {
    render(<Card />);
  });
});


describe('Card components visible', () => {
  test('renders the title and body text', () => {
    render(<Card title="Test Title" body="Test Body Text" />);
    const titleElement = screen.getByText(/Test Title/i);
    const bodyElement = screen.getByText(/Test Body Text/i);

    expect(titleElement).toBeInTheDocument();
    expect(bodyElement).toBeInTheDocument();
  });

  test('renders the user icon', () => {
    render(<Card title="Test Title" body="Test Body Text" />);
    const iconElement = screen.getByTestId('svg');
    expect(iconElement).toBeInTheDocument();
  });
});