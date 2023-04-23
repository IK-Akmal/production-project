import Layout from './Layout';

import type { Meta, StoryObj } from '@storybook/react';

type LayoutType = typeof Layout;
type Story = StoryObj<LayoutType>;

const meta:Meta = {
    title: 'Widgets/Layout',
    component: Layout,
};

export default meta;

export const Default:Story = {};
