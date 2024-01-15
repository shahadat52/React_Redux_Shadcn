import { useState } from 'react'
import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";
import TodoCard from "./todoCard";
import { TTodo } from "@/redux/features/todoSlice";
import { useGetTodosQuery } from "@/redux/api/api";

export type TTodoCartProps = {
    key: string,
    todo: TTodo
}

const TodoContainer = () => {
    const [priority, setPriority] = useState('')
    const { data, isLoading, isError } = useGetTodosQuery(priority)
    if (isLoading) {
        return <p>Loading------</p>
    }
    const todos = data?.data
    // const { todos } = useAppSelector(state => state.todos)
    const sortingArr = todos && [...todos]?.sort((a, b) => (a.isCompleted) - (b.isCompleted))
    console.log({priority});
    return (
        <div className="p-3">
            <h1 className="text-center py-3 text-2xl font-semibold">My Todo</h1>
            <div className="flex justify-between pb-2">
                <AddTodoModal />
                <TodoFilter setPriority={setPriority} priority = {priority} />
            </div>
            <div className="bg-primary-gradient h-full rounded-lg p-[5px] space-y-2">
                <div className="bg-white rounded-lg">
                    <div className="p-3">

                        {
                            sortingArr?.length ? sortingArr.map(todo => <TodoCard
                                key={todo._id}
                                todo={todo} />) : <div className="text-center bg-white w-full rounded-md "> <p className="p-2">There is no task pending</p></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoContainer;