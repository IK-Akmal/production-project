import { FC } from "react";
import { classNames } from "shared/lib/classNames";
import NavbarProps from "./Navbar.props";

import styles from "./Navbar.module.scss";
import AppLink from "shared/ui/AppLink/Applink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <nav className={classNames(styles.Navbar, className)}>
      <ThemeSwitcher />
      <div className={styles.links}>
        <AppLink to="/">Главная</AppLink>
        <AppLink to="/about">О сайте</AppLink>
      </div>
    </nav>
  );
};

export { Navbar };
