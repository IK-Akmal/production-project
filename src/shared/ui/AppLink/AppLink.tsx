import { Link } from 'react-router-dom';

import styles from './AppLink.module.scss';

import { AppLinkTheme, type AppLinkProps } from './AppLink.props';

import { classNames } from '@/shared/lib/classNames';

const AppLink = ({ className, theme = AppLinkTheme.Primary, ...props }: AppLinkProps) => (
    <Link
        className={classNames(styles.link, styles[theme], className)}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
    />
);

export default AppLink;
