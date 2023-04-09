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
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...props}
    />
);

export default AppLink;
