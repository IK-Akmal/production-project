import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';

import styles from './AppLink.module.scss';

import { AppLinkTheme, type AppLinkProps } from './AppLink.props';

const AppLink = ({ className, theme = AppLinkTheme.Primary, ...props }: AppLinkProps) => (
    <Link
        className={classNames(styles.link, styles[theme], className)}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
    />
);

export default AppLink;
