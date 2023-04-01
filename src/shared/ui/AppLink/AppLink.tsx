import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';

import { AppLinkProps } from './AppLink.props';

const AppLink = ({
    className,
    // theme = AppLinkTheme.Primary,
    ...props
}: AppLinkProps) => (
    <Link
        className={classNames(className)}
        {...props}
    />
);

export default AppLink;
