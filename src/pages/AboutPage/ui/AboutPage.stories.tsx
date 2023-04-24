import AboutPage from './AboutPage';

import type { Meta, StoryObj } from '@storybook/react';

type AboutPageType = typeof AboutPage
type Store = StoryObj<AboutPageType>

const meta:Meta<AboutPageType> = {
    title: 'Page/AboutPage',
    component: AboutPage,
};

export default meta;

export const Default:Store = {};
