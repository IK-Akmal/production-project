import { FC } from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib/classNames';
import { Button, ThemeButton } from 'shared/ui/Button';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import LightIcon from 'shared/assets/icons/theme-light.svg';

import styles from './ThemeSwitcher.module.scss';
import ThemeSwitcherProps from './ThemeSwicher.props';

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className, ...props }) => {
    const { toggleTheme, theme } = useTheme();

    return (
        <Button
            {...props}
            onClick={toggleTheme}
            theme={ThemeButton.Clear}
            className={classNames(styles.themeSwitcher, className)}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};

export default ThemeSwitcher;
