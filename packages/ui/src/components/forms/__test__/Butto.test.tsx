import { render, screen } from '@testing-library/react';

import { Button } from '../Button';

test('Button', () => {
  render(<Button />);

  const element = screen.getByText(/boop/i)

  expect(element).toBeInTheDocument();
});
