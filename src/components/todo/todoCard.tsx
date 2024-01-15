import { Button } from "../ui/button";
import UpdateModal from "./UpdateModal";
import { TTodoCartProps } from "./todoContainer";
import { useDeleteTodoMutation, useStatusUpdateMutation } from "@/redux/api/api";

const TodoCard = ({ todo }: TTodoCartProps) => {
    const { task, description, _id, id, isCompleted, priority } = todo
    // const dispatch = useAppDispatch()


    const [deleteTask, result] = useDeleteTodoMutation()
    const [statusUpdate, updateResult] = useStatusUpdateMutation()

    const handleToggleCompleted = (id: string) => {
        const updateData = {
            task,
            description,
            id,
            priority,
            isCompleted: !isCompleted
        }
        const option = {
            _id,
            updateData
        }
        statusUpdate(option)

        // dispatch(toggleCompleted(id))
    }
    return (
        <div className=" flex justify-between border rounded-lg p-2 items-center mb-3 ">
            <input
                defaultChecked={isCompleted}
                onChange={() => handleToggleCompleted(id)}
                type="checkbox"
                name="complete"
                value="complete"
                id=""
            />
            <h2 className="flex-1 ml-2 font-semibold my-auto">{task}</h2>
            <div className={`size-3 rounded-full px-auto flex justify-center items-center  
            ${priority === 'medium' ? 'bg-yellow-500' : null}
            ${priority === 'high' ? 'bg-red-500' : null}
            ${priority === 'low' ? 'bg-green-500' : null}`}>

            </div>
            <p className={`my-auto flex-1 ml-2 
            `}>{priority}</p>
            {
                isCompleted ? <p className="font-semibold text-green-500 my-auto flex-1">Done</p> : <p className="font-semibold flex-1 text-red-500 my-auto">Pending</p>
            }
            <p className="my-auto flex-1 mr-5">{description}</p>

            <div className="space-x-3">
                <Button className="bg-red-500">
                    <svg
                        onClick={() => deleteTask(_id)}
                        className="size-5 flex-1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor">
                        <path strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                    </svg>

                </Button>
                <UpdateModal key={_id} todo={todo} />
            </div>
        </div>
    );
};

export default TodoCard;