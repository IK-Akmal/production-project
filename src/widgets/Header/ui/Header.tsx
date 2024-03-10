import React, { useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';

import styles from './Header.module.scss';

import type HeaderProps from './Header.props';

import Modal from '@/shared/ui/Modal/Modal';
import { classNames } from '@/shared/lib/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';

const Header = ({ className, ...props }: HeaderProps) => {
    const [isAuthModalVisible, setIsAuthModalVisible] = useState(false);
    const { t } = useTranslation();

    const onToggleModal = useCallback(() => {
        setIsAuthModalVisible((prev) => !prev);
    }, []);

    // TODO: for test
    const description = `
     Lorem ipsum, dolor sit amet consectetur adipisicing elit.
     Aperiam accusantium suscipit quia quod excepturi aliquam quisquam sapiente totam consequatur, 
     dolores ut doloribus? Expedita repudiandae, cupiditate sed illo architecto saepe voluptatibus.
    `;

    return (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <header data-testid="header" className={classNames(styles.header, className)} {...props}>
            <Button
                className={styles.authButton}
                theme={ButtonTheme.ClearInvertend}
                onClick={onToggleModal}
            >
                {t('signin')}
            </Button>
            <Modal isOpen={isAuthModalVisible} onClose={onToggleModal}>
                {description}
            </Modal>
        </header>
    );
};

export default Header;
