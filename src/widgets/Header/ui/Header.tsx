import React from 'react';

import { classNames } from 'shared/lib/classNames';

import styles from './Header.module.scss';

import type HeaderProps from './Header.props';

const Header = ({ className, ...props }: HeaderProps) => (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <header data-testid="header" className={classNames(styles.header, className)} {...props} />
);

export default Header;
