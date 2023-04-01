import { FC } from 'react';
import { classNames } from 'shared/lib/classNames';
import AppLink from 'shared/ui/AppLink/Applink';

import NavbarProps from './Navbar.props';
import styles from './Navbar.module.scss';

const Navbar: FC<NavbarProps> = ({ className }) => (
    <nav className={classNames(styles.Navbar, className)}>
        <div className={styles.links}>
            <AppLink to="/">Главная</AppLink>
            <AppLink to="/about">О сайте</AppLink>
        </div>
    </nav>
);

export { Navbar };
