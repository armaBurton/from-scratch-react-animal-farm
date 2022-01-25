import { render, screen } from '@testing-library/react';
import App from './App';

test('Alchemy Animal Farm', () => {
  render(<App />);
  const linkElement = screen.getByText(/Alchemy Animal Farm/i);
  expect(linkElement).toBeInTheDocument();
});
