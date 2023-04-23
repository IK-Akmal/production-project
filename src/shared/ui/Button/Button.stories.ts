import Button from './Button';
import { ThemeButton } from './Button.props';

import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
    title: 'Shared/Button',
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Button',
    },
};

export const Clear: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.Clear,
    },
};
export const Outline: Story = {
    args: {
        children: 'Button',
        theme: ThemeButton.Outline,
    },
};
