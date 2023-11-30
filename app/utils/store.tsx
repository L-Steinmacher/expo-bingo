import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import tileReducer from "../feature/tile/tile-slice";

// TODO: Add reducers
export const store = configureStore({
    reducer: {
        tile: tileReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
