import React, { PropsWithChildren, useMemo } from 'react';
import { Provider } from 'react-redux';

import { createReduxStore } from './StoreProvider.config';

import type { StoreProviderProps } from './StoreProvider.types';

export const StoreProvider = ({
    children,
    initialState,
}: PropsWithChildren<StoreProviderProps>) => {
    const store = useMemo(() => createReduxStore(initialState), [initialState]);

    return <Provider store={store}>{children}</Provider>;
};
