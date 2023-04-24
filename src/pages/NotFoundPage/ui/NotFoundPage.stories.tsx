import NotFoundPage from './NotFoundPage';

import type { Meta, StoryObj } from '@storybook/react';

type NotFoundPageType = typeof NotFoundPage
type Store = StoryObj<NotFoundPageType>

const meta:Meta<NotFoundPageType> = {
    title: 'Page/NotFoundPage',
    component: NotFoundPage,
};

export default meta;

export const Default:Store = {};
