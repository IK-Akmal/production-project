import { counterReducer, couterActions, getCounterValue } from './Couter.slice';

import type { CounterSchema } from '../types/CouterSchema';

describe('Counter.slice.test', () => {
    test('Counter action decrement', () => {
        const state : CounterSchema = { value: 10 };

        expect(counterReducer(state, couterActions.decrement())).toEqual({ value: 9 });
    });

    test('Counter action increment', () => {
        const state : CounterSchema = { value: 10 };

        expect(counterReducer(state, couterActions.increment())).toEqual({ value: 11 });
    });

    test('should work with empty state', () => {
        expect(counterReducer(undefined, couterActions.increment())).toEqual({ value: 1 });
    });

    test('Counter selector getCounterValue', () => {
        const state = { counter: { value: 10 } };
        expect(getCounterValue(state)).toEqual(10);
    });
});
