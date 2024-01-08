import { createPortal } from 'react-dom';

import { PortalProps } from './Portal.props';

const Portal = (props: PortalProps) => {
    const { children, element = document.body } = props;

    return createPortal(children, element);
};

export default Portal;
