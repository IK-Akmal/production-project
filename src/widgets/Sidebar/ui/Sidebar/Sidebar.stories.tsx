import Sidebar from './Sidebar';

import type { Meta, StoryObj } from '@storybook/react';

type SidebarType = typeof Sidebar;
type Story = StoryObj<SidebarType>

const meta:Meta<SidebarType> = {
    title: 'Widgets/Sidebar',
    component: Sidebar,
};

export default meta;

export const Default:Story = {};
