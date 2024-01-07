import Header from './Header';

import type { Meta, StoryObj } from '@storybook/react';

type HeaderType = typeof Header;
type Story = StoryObj<HeaderType>;

const meta: Meta<HeaderType> = {
    title: 'Widgets/Header',
    component: Header,
};

export default meta;

export const Default: Story = {};
