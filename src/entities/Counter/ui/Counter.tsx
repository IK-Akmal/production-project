import React from 'react';

import { couterActions, getCounterValue } from '../model/slice/Couter.slice';

import { Button } from '@/shared/ui/Button';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';

export const Counter = () => {
    const dispatch = useAppDispatch();
    const value = useAppSelector(getCounterValue);

    const increment = () => {
        dispatch(couterActions.increment());
    };
    const decrement = () => {
        dispatch(couterActions.decrement());
    };

    return (
        <div data-testid="Counter">
            <p>{value}</p>
            <Button onClick={increment}>+</Button>
            <Button onClick={decrement}>-</Button>
        </div>
    );
};
