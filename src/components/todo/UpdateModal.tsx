import { Button } from "../ui/button";
import { FormEvent } from 'react'
import { useState } from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { TTodoCartProps } from "./todoContainer";
import { useTodoUpdateMutation } from "@/redux/api/api";

const UpdateModal = ({ todo }: TTodoCartProps) => {
    // const { task, description, _id, priority } = todo
    const [task, setTask] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('')

    const [todoUpdate, updateResult] = useTodoUpdateMutation()



    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        const updateInfo = {
            task: task || todo.task,
            description: description || todo.description,
            priority: priority || todo.priority,
            isCompleted: todo?.isCompleted
        }

        const option = {
            _id: todo._id,
            updateInfo
        }
        console.log({ option });
        todoUpdate(option)
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>
                    <svg
                        className="size-5 flex-1"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none" viewBox="0 0 24 24"
                        strokeWidth="1.5" stroke="currentColor" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                    </svg>

                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                    <DialogDescription>
                        Add your task that you want to finish
                    </DialogDescription>
                </DialogHeader>
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="name" className="text-right">
                                Task
                            </Label>
                            <Input
                                onChange={(e) => setTask(e.target.value)}
                                name="task" id="task" className="col-span-3" defaultValue={todo?.task} />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Description
                            </Label>
                            <Input
                                defaultValue={todo?.description}
                                onBlur={(e) => setDescription(e.target.value)}
                                name="description" id="description" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Priority
                            </Label>
                            <Select
                                defaultValue={todo?.priority}
                                onValueChange={(value) => setPriority(value)}
                            >
                                <SelectTrigger className="col-span-3">
                                    <SelectValue placeholder="Priority" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="high">High</SelectItem>
                                    <SelectItem value="medium">Medium</SelectItem>
                                    <SelectItem value="low">Low</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                        <DialogClose asChild>
                            <Button type="submit">ADD TASK</Button>
                        </DialogClose>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateModal;