import React from 'react';
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks';

import { Button } from 'shared/ui/Button';

import { couterActions, getCounterValue } from '../model/slice/Couter.slice';

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
