import { render, screen } from '@testing-library/react';
import ArrayArea from './ArrayArea';

test('renders learn react link', () => {
  render(<ArrayArea />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});