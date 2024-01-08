import { Preview } from '@storybook/react';

import { ThemeDecorator } from './Decorators/ThemeDecorator';
import { StyleDecorator } from './Decorators/StyleDecorator';
import { RouterDecorator } from './Decorators/RouterDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },

    },
    decorators: [RouterDecorator, StyleDecorator, ThemeDecorator],
};

export const globalTypes = {
    scheme: {
        name: 'Theme',
        description: 'Select light or dark theme',
        defaultValue: 'light',
        toolbar: {
            icon: 'mirror',
            items: ['light', 'dark'],
        },
    },
};

export default preview;
