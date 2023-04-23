import AppLink from './AppLink';

import type { Meta, StoryObj } from '@storybook/react';

type AppLinkType = typeof AppLink;
type Story = StoryObj<AppLinkType>

const meta:Meta<AppLinkType> = {
    title: 'Shared/AppLink',
    component: AppLink,
    argTypes: {
        to: {
            type: 'string',
            defaultValue: '',
        },
        className: {
            type: 'string',
            defaultValue: '',
        },
        children: {
            type: 'string',
        },
    },
};

export default meta;

export const Default:Story = {
    args: {
        children: 'Link',
    },
};
