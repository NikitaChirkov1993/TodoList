import TaskFilter from "@components/TaskFilter/TaskFilter";
import { useTaskInput } from "@helpers/useTaskInput";
import TaskAdd from "@ui/TaskAdd/TaskAdd";
import TaskCheckbox from "@ui/TaskCheckbox/TaskCheckbox";
import TaskDelete from "@ui/TaskDelete/TaskDelete";
import TaskInput from "@ui/TaskInput/TaskInput";
import { filterTasksUtil } from "@utils/FilterTaskUtil";
import { getTasksFromLocalStorage } from "@utils/LocalStorageUtil";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Itask } from "types/types";
import style from "./Tasktodo.module.css";


const TaskTodo = () => {
    const [tasks, setTask] = useState<Itask[]>(getTasksFromLocalStorage());
    const [filteredTasks, setFilteredTasks] = useState<Itask[]>(getTasksFromLocalStorage());
    const [flagFilter, setFlagFilter] = useState<string>("");
    const { onChangeInput, taskInput, setTaskInput } = useTaskInput();

    useEffect(() => {
        localStorage.setItem("taskList", JSON.stringify(tasks));
    }, [tasks]);


    //логика добавления задач в список:
    const handleTaskAdd = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (taskInput.trim() !== "") {
            const idDate = new Date().getTime();
            const newTask = { title: taskInput, id: idDate, done: false };
            const updatedTasks = [...tasks, newTask];
            setTask(updatedTasks);
            setFilteredTasks(updatedTasks);
            setTaskInput("");
        }
    };

    //Логика удаления задач:
    const handeleTaskDelete = (id: number) => {
        const updatedTasks = tasks.filter((el) => el.id !== id);
        setTask(updatedTasks);
        setFilteredTasks(filterTasksUtil(updatedTasks, flagFilter));
    };

    //Логика добавления выполненых задач:
    const handleTaskDone = (id: number) => {
        const updatedTasks = tasks.map((el) => (el.id === id ? { ...el, done: !el.done } : el));
        setTask(updatedTasks);
        setFilteredTasks(filterTasksUtil(updatedTasks, flagFilter));
    };

    //Логика фильтрации:
    const handleFilterChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setFlagFilter(value); // Обновляем фильтр
        setFilteredTasks(filterTasksUtil(tasks, value));
    };

    return (
        <div className={style.wrapper__global}>

            <TaskFilter onChange={handleFilterChange}/>

            <form className={style.form__taskTodo} onSubmit={handleTaskAdd}>
                <TaskInput onChange={onChangeInput} value={taskInput} />
                <TaskAdd/>
            </form>

            <ul className={style.list}>
                {filteredTasks.length > 0 ? (
                    filteredTasks.map((el) => (
                        <li className={style.item} key={el.id}>
                            <div className={`${style.text} ${el.done ? style.itemQWE : ""}`}>{el.title}</div>
                            <TaskCheckbox onClick={() => handleTaskDone(el.id)} checked={el.done} />
                            <TaskDelete onClick={() => handeleTaskDelete(el.id)} />
                        </li>
                    ))
                ) : (
                    <div className={style.taskDefault}>Задач нету!</div>
                )}
            </ul>
        </div>
    );
};

export default TaskTodo;
