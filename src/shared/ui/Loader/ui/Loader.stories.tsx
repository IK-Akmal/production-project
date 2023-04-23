import Loader from './Loader';

import type { Meta, StoryObj } from '@storybook/react';

type LayoutType = typeof Loader;
type Story = StoryObj<LayoutType>;

const meta:Meta = {
    title: 'Shared/Loader',
    component: Loader,
};

export default meta;

export const Default:Story = {};
