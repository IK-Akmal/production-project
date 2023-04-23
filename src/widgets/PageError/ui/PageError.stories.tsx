import PageError from './PageError';

import type { Meta, StoryObj } from '@storybook/react';

type PageErrorType = typeof PageError;
type Story = StoryObj<PageErrorType>

const meta:Meta<PageErrorType> = {
    title: 'Widgets/PageError',
    component: PageError,
};

export default meta;

export const Default:Story = {};
