declare global {
    export type RootState =
        import('../src/app/providers/StoreProvider/StoreProvider.config').RootState;
    export type AppDispatch =
        import('../src/app/providers/StoreProvider/StoreProvider.config').AppDispatch;
}
export {};
