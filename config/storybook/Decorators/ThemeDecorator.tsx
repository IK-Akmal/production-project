import { Decorator } from '@storybook/react';
import { useEffect } from 'react';

export const ThemeDecorator: Decorator = (Story, context) => {
    const {
        globals: { scheme },
    } = context;

    useEffect(() => {
        document.documentElement.setAttribute('theme', scheme);
    }, [scheme]);

    return <Story />;
};
