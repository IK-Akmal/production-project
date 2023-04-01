import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import AppLink from 'shared/ui/AppLink/Applink';
import { useTranslation } from 'react-i18next';

import NavbarProps from './Navbar.props';
import styles from './Navbar.module.scss';

const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <nav className={classNames(styles.navbar, className)}>
            <div className={styles.links}>
                <AppLink to="/">{t('main')}</AppLink>
                <AppLink to="/about">{t('about')}</AppLink>
            </div>
        </nav>
    );
};

export { Navbar };
