import { createSlice } from "@reduxjs/toolkit/react"

export type TTodo = {
    _id?: string
    id: string;
    task: string;
    description: string,
    priority: string,
    isCompleted?: false
}

type TInitialState = {
    todos: TTodo[]
}

const initialState: TInitialState = {
    todos: []
}
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push({ ...action.payload, isCompleted: false })
        },
        deleteTask: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        toggleCompleted: (state, action) => {
            console.log({ state });
            const task = state.todos.find((todo) => todo.id === action.payload)
            task!.isCompleted= !task?.isCompleted as false | undefined
            state.todos = state.todos
            
        }
    }

})

export const { addTodo, deleteTask, toggleCompleted } = todoSlice.actions
export default todoSlice.reducer