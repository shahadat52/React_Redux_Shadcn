import TodoCard from "./todoCard";

const TodoContainer = () => {
    return (
        <div className="p-3">
            <h1 className="text-center py-3 text-2xl font-semibold">My Todo</h1>
            <div className="space-x-4">
                <button>Add Todo</button>
                <button>Filter</button>
            </div>
            <div className="bg-primary-gradient h-full rounded-lg p-[5px] space-y-2">
                <div className="bg-white rounded-lg">
                    <div className="p-3">
                        {/* <div className="text-center bg-white w-full rounded-md "> <p className="p-2">There is no task pending</p></div> */}
                        <TodoCard />
                        <TodoCard />
                        <TodoCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoContainer;