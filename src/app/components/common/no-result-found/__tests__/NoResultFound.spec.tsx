import { render, screen } from '@testing-library/react';
import NoResultFound from '../NoResultFound';

describe('NoResultFound', () => {
    it('renders "No Result Found"', () => {
        render(<NoResultFound />);
        const element = screen.getByText(/No Result Found/);
        const elDescription = screen.getByText(/Please try again with another channel name or number/);
        expect(element).toBeInTheDocument();
        expect(elDescription).toBeInTheDocument();
    });
})
