import { render, screen } from '@testing-library/react';

import { Button, ThemeButton } from '.';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('Test clear theme', () => {
        render(<Button theme={ThemeButton.Clear}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
    });
});
