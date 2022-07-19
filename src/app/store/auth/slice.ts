import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppThunk} from "../index";
import {api} from "../../api";

type State = {
    loading: boolean
    user?: string
    isAuth: boolean
}

const initialState: State = {
    loading: false,
    isAuth: false
}

const slice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setUser(state: State, action: PayloadAction<string | undefined>) {
            const {payload} = action
            state.user = payload
            state.isAuth = payload != null
            state.loading = false
        },
        setLoading(state: State, action: PayloadAction<boolean>) {
            state.loading = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.loading = true
            })
            .addCase(loginThunk.fulfilled, (state, { payload }) => {
                console.log(payload)
                state.loading = false
                state.user = payload as any
                state.isAuth = true
            })
            .addCase(loginThunk.rejected, (state, { payload }) => {
                state.loading = false
                state.user = undefined
                state.isAuth = false
            })
    }
})


export const loginThunk = createAsyncThunk('@@auth/login', async () => {
    return await api.auth.login()
})

export const reducer = slice.reducer
export const actions = slice.actions
