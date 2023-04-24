import MainPage from './MainPage';

import type { Meta, StoryObj } from '@storybook/react';

type MainPageType = typeof MainPage
type Store = StoryObj<MainPageType>

const meta:Meta<MainPageType> = {
    title: 'Page/MainPage',
    component: MainPage,
};

export default meta;

export const Default:Store = {};
