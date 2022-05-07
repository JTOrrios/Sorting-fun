import { render, screen } from '@testing-library/react';
import SocialLinks from './SocialLinks';

test('renders learn react link', () => {
  render(<SocialLinks />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
