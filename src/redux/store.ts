import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './features/todoSlice'
export const store = configureStore({
    reducer: {
        todo: todoReducer
    },
    // devTools: false
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch