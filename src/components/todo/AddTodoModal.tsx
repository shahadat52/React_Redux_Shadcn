import { FormEvent } from 'react'
import { useState } from 'react'
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAppDispatch } from '@/redux/hooks';
import { TTodo } from '@/redux/features/todoSlice';
import { useAddTodoMutation } from '@/redux/api/api';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';



const AddTodoModal = () => {
    const [task, setTask] = useState('')
    const [description, setDescription] = useState('')
    const [priority, setPriority] = useState('')
    // const dispatch = useAppDispatch()
    const [addTodo, result] = useAddTodoMutation()

    console.log({ result });
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()

        const id = Math.floor(10000000 + Math.random() * 90000000).toString();
        // const id = Math.random().toString(36)
        const todoInfo: TTodo = {
            id,
            task,
            description,
            isCompleted: false,
            priority
        }
        console.log('inside modal ==>', todoInfo);
        // dispatch(addTodo(todoInfo))
        addTodo(todoInfo)
    }



    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-primary-gradient">Add Todo</Button>
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
                            <Input onBlur={(e) => setTask(e.target.value)} name="task" id="task" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Description
                            </Label>
                            <Input onBlur={(e) => setDescription(e.target.value)} name="description" id="description" className="col-span-3" />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Priority
                            </Label>
                            <Select onValueChange={(value) => setPriority(value) } >
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

export default AddTodoModal;