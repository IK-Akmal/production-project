import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import AppLink from 'shared/ui/AppLink/AppLink';
import { classNames } from 'shared/lib/classNames';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink.props';

import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';

import NavbarProps from './Navbar.props';
import styles from './Navbar.module.scss';

const Navbar: FC<NavbarProps> = ({ className }) => {
    const { t } = useTranslation();

    return (
        <nav className={classNames(styles.navbar, className)}>
            <AppLink theme={AppLinkTheme.Secondary} to={RoutePath.main} className={styles.link}>
                <MainIcon className={styles.icon} />
                <span className={styles.text}>{t('main')}</span>
            </AppLink>
            <AppLink theme={AppLinkTheme.Secondary} to={RoutePath.about} className={styles.link}>
                <AboutIcon className={styles.icon} />
                <span className={styles.text}>{t('about')}</span>
            </AppLink>
        </nav>
    );
};

export { Navbar };
