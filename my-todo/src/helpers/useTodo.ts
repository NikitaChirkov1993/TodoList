import { filterTasksUtil } from "@utils/FilterTaskUtil";
import { getTasksFromLocalStorage } from "@utils/LocalStorageUtil";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Itask } from "types/types";
import { useTaskEditInput } from "./useTaskEditInput";
import { useTaskInput } from "./useTaskInput";

export const useTodo = () => {
        const [tasks, setTask] = useState<Itask[]>(getTasksFromLocalStorage());
        const [filteredTasks, setFilteredTasks] = useState<Itask[]>(getTasksFromLocalStorage());
        const [flagFilter, setFlagFilter] = useState<string>("");
        const [isVisibleModal, setIsVisibleModal] = useState(false);
        const [idEditTask, setIdEditTask] = useState<null | number>(null);

        const { onChangeInput, taskInput, setTaskInput } = useTaskInput();
        const {taskEditInput,setTaskEditInput,onChangeEditInput } = useTaskEditInput();

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

        //Логика добавления выполненых/невыполненных задач:
        const handleTaskDone = (id: number) => {
            const updatedTasks = tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task));
            setTask(updatedTasks);
            setFilteredTasks(filterTasksUtil(updatedTasks, flagFilter));
        };

        //Логика фильтрации:
        const handleFilterChange = (e: ChangeEvent<HTMLSelectElement>) => {
            const value = e.target.value;
            setFlagFilter(value);
            setFilteredTasks(filterTasksUtil(tasks, value));
        };


        //Логика модального окна:
        const handleModalOpen = (id:number) => {
            setIsVisibleModal(true);
            setIdEditTask(id);
        }
        const handleModalClose = () => {
            setIsVisibleModal(false);
            setTaskEditInput("");
        }

        const handleTaskEditAdd = () => {
            if (idEditTask && taskEditInput.trim() !== "") {
                console.log({ idEditTask });
                const updatedTasks = tasks.map((task) => (task.id === idEditTask ? { ...task, title: taskEditInput } : task))
                setTask(updatedTasks);
            setFilteredTasks(filterTasksUtil(updatedTasks, flagFilter));

            } else {
                console.log("ID нету");
            }
            setTaskEditInput("");
            setIsVisibleModal(false);
        }

    return {
        filteredTasks,
        handleTaskAdd,
        handleTaskDelete,
        handleTaskDone,
        handleFilterChange,
        onChangeInput,
        taskInput,
        isVisibleModal,
        handleModalOpen,
        handleModalClose,
        taskEditInput,
        setTaskEditInput,
        onChangeEditInput,
        handleTaskEditAdd
    };
}