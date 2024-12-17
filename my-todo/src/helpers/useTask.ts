import { filterTasksUtil } from "@utils/FilterTaskUtil";
import { getTasksFromLocalStorage } from "@utils/LocalStorageUtil";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Itask } from "types/types";
import { useTaskInput } from "./useTaskInput";

export const useTask = () => {
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
        const handleTaskDelete = (id: number) => {
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
            setFlagFilter(value); 
            setFilteredTasks(filterTasksUtil(tasks, value));
    };

    return {
        filteredTasks,
        handleTaskAdd,
        handleTaskDelete,
        handleTaskDone,
        handleFilterChange,
        onChangeInput,
        taskInput,
    };
}