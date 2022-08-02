import { render, screen } from '@testing-library/react';
import Header from '../Header';

describe('Header', () => {
    it('renders "Astro"', () => {
        render(<Header />);
        const element = screen.getByText(/Astro/);
        expect(element).toBeInTheDocument();
    });
})
