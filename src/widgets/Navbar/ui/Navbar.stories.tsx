import { Navbar } from './Navbar';

import type { Meta, StoryObj } from '@storybook/react';

type NavbarType = typeof Navbar;
type Story = StoryObj<NavbarType>;

const meta:Meta<NavbarType> = {
    title: 'Widgets/Navbar',
    component: Navbar,
};

export default meta;
export const Default:Story = {};
