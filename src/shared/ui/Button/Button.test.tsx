import { render, screen } from '@testing-library/react';

import { Button, ButtonTheme } from '.';

describe('Button', () => {
    test('Test render', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('Test clear theme', () => {
        render(<Button theme={ButtonTheme.Clear}>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
    });
});
