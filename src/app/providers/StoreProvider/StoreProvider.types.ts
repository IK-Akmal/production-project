import { CounterSchema } from 'entities/Counter';

export interface StateSchema {
    counter: CounterSchema;
}

export interface StoreProviderProps {
    initialState?: StateSchema;
}
