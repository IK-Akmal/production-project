import React, { ErrorInfo, Suspense } from 'react';
import PageError from 'widgets/PageError/ui/PageError';

import {
    ErrorBoundaryProps,
    ErrorBoundaryStateType,
}
    from './ErrorBoundary.props';

class ErrorBoundary
    extends React.Component<ErrorBoundaryProps, ErrorBoundaryStateType> {
    constructor(props:ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error:Error, errorInfo:ErrorInfo) {
        // eslint-disable-next-line no-console
        console.log(error, errorInfo);
    }

    render() {
        const { state: { hasError }, props: { children } } = this;

        if (hasError) {
            return (
                <Suspense fallback={null}>
                    <PageError />
                </Suspense>
            );
        }

        return children;
    }
}

export default ErrorBoundary;
