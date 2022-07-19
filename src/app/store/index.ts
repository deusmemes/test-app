import {Action, combineReducers} from 'redux'
import {todoSlice} from "./todo/slice";
import {configureStore, ThunkAction} from "@reduxjs/toolkit";
import {reducer as authReducer} from "./auth/slice";

const rootReducer = combineReducers({
    todo: todoSlice.reducer,
    auth: authReducer
})

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.REACT_APP_ENABLE_REDUX_DEV_TOOLS === 'true'
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, undefined, Action<string>>;

export default store
