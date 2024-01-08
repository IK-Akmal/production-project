import { render, screen } from '@testing-library/react';

import Header from './Header';

describe('Sidebar', () => {
    test('Test render', () => {
        render(<Header />);
        expect(screen.getByTestId('header')).toBeInTheDocument();
    });
});
