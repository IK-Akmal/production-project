import { Decorator } from '@storybook/react';

export const ThemeDecorator:Decorator = (Story, context) => {
    const { globals: { scheme } } = context;
    return (
        <div className={`app ${scheme}`}>
            <Story />
        </div>
    );
};
