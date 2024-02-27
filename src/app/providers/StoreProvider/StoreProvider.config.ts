import { configureStore } from '@reduxjs/toolkit';

import { counterReducer } from 'entities/Counter';

import type { StateSchema } from './StoreProvider.types';

export function createReduxStore(initialState?: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
        },
        devTools: isDev,
        preloadedState: initialState,
    });
}

export type Store = ReturnType<typeof createReduxStore>;

export type RootState = ReturnType<Store['getState']>;
export type AppDispatch = Store['dispatch'];
