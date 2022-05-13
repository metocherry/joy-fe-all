import { render, screen } from '@testing-library/react';
import App from '../pages';

test('renders learn react link', () => {
  render(<App />);
  const element = screen.getByText(/Web/i)
  expect(element).toBeInTheDocument();
});
