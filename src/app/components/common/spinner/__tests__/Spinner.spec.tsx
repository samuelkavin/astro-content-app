import { render, screen } from '@testing-library/react';
import Spinner from '../Spinner';


it('renders "Loading..."', () => {
  render(<Spinner />);
  const element = screen.getByText(/Loading.../);
  expect(element).toBeInTheDocument();
});