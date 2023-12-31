import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import tileReducer from "../feature/tile/tile-slice";
import ruleReducer from "../feature/rules/rule-slice";
import userReducer from "../feature/user/user-slice";

// TODO: Add reducers
export const store = configureStore({
    reducer: {
        tile: tileReducer,
        rules: ruleReducer,
        user: userReducer,
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
