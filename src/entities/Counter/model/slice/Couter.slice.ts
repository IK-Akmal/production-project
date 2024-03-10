import { createSlice } from '@reduxjs/toolkit';

import type { CounterSchema } from '../types/CouterSchema';

const initialState: CounterSchema = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
    },
    selectors: {
        getCounterValue: (store) => store.value,
    },
});

export const { actions: couterActions, reducer: counterReducer } = counterSlice;
export const { getCounterValue } = counterSlice.selectors;
