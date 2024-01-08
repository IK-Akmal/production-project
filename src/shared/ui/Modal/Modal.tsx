import {
    MouseEvent, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames';

import { Portal } from '../Portal';

import ModalProps from './Modal.props';
import styles from './Modal.module.scss';

const ANIMATION_DELAY = 200;

const Modal = ({
    isOpen, onClose, className, children, ...other
}: ModalProps) => {
    const [isClosing, setIsClosing] = useState<boolean>(false);

    const timerRef = useRef<number>();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timerRef.current = window.setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                closeHandler();
            }
        },
        [closeHandler],
    );

    const contentHandler = (event: MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
    };

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [onKeyDown, isOpen]);

    useEffect(() => () => window.clearTimeout(timerRef.current), []);

    return (
        <Portal>
            <section
                className={classNames(styles.modal, className, {
                    [styles.opened]: isOpen,
                    [styles.isClosing]: isClosing,
                })}
                // eslint-disable-next-line react/jsx-props-no-spreading
                {...other}
            >
                <div className={styles.overlay} onClick={closeHandler} aria-hidden="true">
                    <div className={styles.content} onClick={contentHandler} aria-hidden="true">
                        {children}
                    </div>
                </div>
            </section>
        </Portal>
    );
};

export default Modal;
