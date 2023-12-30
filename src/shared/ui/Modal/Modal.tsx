import { MouseEvent } from 'react';
import { classNames } from 'shared/lib/classNames';

import ModalProps from './Modal.props';
import styles from './Modal.module.scss';

const Modal = ({
    isOpen, onClose, className, children, ...other
}:ModalProps) => {
    const closeHandler = () => {
        onClose?.();
    };

    const contentHandler = (event:MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    return (
        <div
            className={classNames(styles.modal, className, {
                [styles.opened]: isOpen,
            })}
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...other}
        >
            <div className={styles.overlay} onClick={closeHandler} aria-hidden="true">
                <div className={styles.content} onClick={contentHandler} aria-hidden="true">
                    {children}
                </div>
            </div>

        </div>
    );
};

export default Modal;
