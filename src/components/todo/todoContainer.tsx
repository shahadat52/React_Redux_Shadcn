import { useAppSelector } from "@/redux/hooks";
import AddTodoModal from "./AddTodoModal";
import TodoFilter from "./TodoFilter";
import TodoCard from "./todoCard";
import { TTodo } from "@/redux/features/todoSlice";

export type TTodoCartProps = {
    key: string,
    todo: TTodo
}
const TodoContainer = () => {

    const { todos } = useAppSelector(state => state.todos)
    const sortingArr = [...todos].sort((a, b) => (a.isCompleted) - (b.isCompleted))
    return (
        <div className="p-3">
            <h1 className="text-center py-3 text-2xl font-semibold">My Todo</h1>
            <div className="flex justify-between pb-2">
                <AddTodoModal />
                <TodoFilter />
            </div>
            <div className="bg-primary-gradient h-full rounded-lg p-[5px] space-y-2">
                <div className="bg-white rounded-lg">
                    <div className="p-3">

                        {
                            sortingArr?.length ? sortingArr.map(todo => <TodoCard
                                key={todo.id}
                                todo={todo} />) : <div className="text-center bg-white w-full rounded-md "> <p className="p-2">There is no task pending</p></div>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoContainer;