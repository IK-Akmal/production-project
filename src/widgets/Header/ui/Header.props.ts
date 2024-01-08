import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface HeaderProps
    extends Omit<DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, 'children'> {}

export default HeaderProps;
