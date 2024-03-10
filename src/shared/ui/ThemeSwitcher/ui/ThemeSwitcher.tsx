import { FC } from 'react';

import DarkIcon from 'shared/assets/icons/theme-dark.svg';

import LightIcon from 'shared/assets/icons/theme-light.svg';

import ThemeSwitcherProps from './ThemeSwicher.props';

import { classNames } from '@/shared/lib/classNames';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className, ...props }) => {
    const { toggleTheme, theme } = useTheme();

    return (
        <Button
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...props}
            onClick={toggleTheme}
            theme={ButtonTheme.Clear}
            className={classNames(className)}
        >
            {theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
        </Button>
    );
};

export default ThemeSwitcher;
