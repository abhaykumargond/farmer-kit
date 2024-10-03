import { render, screen } from '@testing-library/react';
import App from './App';

test('renders connect phantom wallet button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/connect phantom wallet/i);
  expect(buttonElement).toBeInTheDocument();
});