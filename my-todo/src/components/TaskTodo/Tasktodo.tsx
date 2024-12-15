import TaskAdd from "@ui/TaskAdd/TaskAdd";
import TaskCheckbox from "@ui/TaskCheckbox/TaskCheckbox";
import TaskDelete from "@ui/TaskDelete/TaskDelete";
import TaskInput from "@ui/TaskInput/TaskInput";
import { useTaskInput } from "@utils/useTaskInput";
import { useEffect, useState } from "react";
import style from "./Tasktodo.module.css";

interface Itask {
    title: string;
    id: number;
    done: boolean;
}

const getTaskList = JSON.parse(localStorage.getItem("taskList"));

const TaskTodo = () => {
    const [tasks, setTask] = useState<Itask[]>(getTaskList || []);
    const { changeInput, taskInput, setTaskInput } = useTaskInput();

    useEffect(() => {
        localStorage.setItem("taskList", JSON.stringify(tasks));
        console.log(tasks);
    }, [tasks]);

    const handeleTaskAdd = (event) => {
        event.preventDefault();

        if (taskInput.trim() !== "") {
            const idDate = new Date().getTime();
            setTask([...tasks, { title: taskInput, id: idDate, done: false }]);
            setTaskInput("");
        }
    };

    const handeleTaskDelete = (id: number) => {
        const taskDelete = tasks.filter((el) => el.id !== id);
        setTask(taskDelete);
    };

    const handleTaskDone = (id: number) => {
        const taskDone = tasks.map((el) => (
            el.id === id ? { ...el, done: !el.done } : el)
        );
        setTask(taskDone);
    };

    return (
        <>
            <form onSubmit={handeleTaskAdd} className={style.wrapper__taskTodo}>
                <TaskInput changeInput={changeInput} taskInput={taskInput} />
                <TaskAdd onClick={handeleTaskAdd} />
            </form>

            <ul className={style.list}>
                {tasks.map((el, idx) => {
                    return (
                        <li className={style.item} key={el.id}>
                            <div className={`${style.text} ${el.done ? style.itemQWE : ""}`}>{el.title}</div>
                            <TaskCheckbox
                                handleTaskDone={() => handleTaskDone(el.id)}
                                checked={el.done} />
                            <TaskDelete handeleTaskDelete={() => handeleTaskDelete(el.id)} />
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default TaskTodo;
