import styles from './PageLoader.module.scss';

import PageLoaderProps from './PageLoader.props';

import { Loader } from '@/shared/ui/Loader';
import { classNames } from '@/shared/lib/classNames';

const PageLoader = ({ className, ...props }:PageLoaderProps) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <div className={classNames(className, styles.pageLoader)} {...props}>
        <Loader />
    </div>
);

export default PageLoader;
