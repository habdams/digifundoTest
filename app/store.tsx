import {
    Action,
    configureStore,
    ThunkAction
} from '@reduxjs/toolkit';

export const store = configureStore({
    reducer: {
        // Reducer goes here 
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;

export default store;