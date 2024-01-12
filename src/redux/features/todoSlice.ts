import { createSlice } from "@reduxjs/toolkit/react"


const initialState = {
    todos: []
}
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {}

})

// export const {task} = todoSlice.actions
export default todoSlice.reducer