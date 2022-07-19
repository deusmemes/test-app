import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Item} from "../../types/Item";

type State = Item[]

const initialState: State = []

export const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        add(state: State, action: PayloadAction<Item>) {
            state.push(action.payload)
        }
    }
})

export const actions = todoSlice.actions
