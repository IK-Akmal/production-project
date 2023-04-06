import { ReactNode } from 'react';

interface ErrorBoundaryProps{
    children:ReactNode;
}

interface ErrorBoundaryStateType {
    hasError:boolean;
}

export {
    ErrorBoundaryProps,
    ErrorBoundaryStateType,
};
