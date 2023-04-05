import { classNames } from 'shared/lib/classNames';
import { Loader } from 'shared/ui/Loader';

import styles from './PageLoader.module.scss';
import PageLoaderProps from './PageLoader.props';

const PageLoader = ({ className, ...props }:PageLoaderProps) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={classNames(className, styles.pageLoader)} {...props}>
        <Loader />
    </div>
);

export default PageLoader;
