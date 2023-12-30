import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    isOpen?:boolean;
    onClose?: VoidFunction;
}

export default ModalProps;
