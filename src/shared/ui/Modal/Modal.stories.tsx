import { useState } from 'react';

import { Button, ButtonTheme } from '../Button';

import Modal from './Modal';

import type { Meta, StoryObj } from '@storybook/react';

type ModalType = typeof Modal;
type Story = StoryObj<ModalType>;

const meta: Meta<ModalType> = {
    title: 'Shared/Modal',
    component: Modal,
};

export const Default: Story = {
    args: {
        children: 'Description',
    },
    render: function Render(args) {
        const [visible, setVisible] = useState(false);

        const onChange = () => {
            setVisible((prev) => !prev);
        };

        const buttonContent = 'Open modal';

        return (
            <>
                <Button theme={ButtonTheme.Background} onClick={onChange}>
                    {buttonContent}
                </Button>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Modal {...args} isOpen={visible} onClose={onChange} />
            </>
        );
    },
};

export default meta;
