import { Itask } from "types/types";

export const getTasksFromLocalStorage = (): Itask[] => {
    const storedTasks = localStorage.getItem("taskList");
    return storedTasks ? JSON.parse(storedTasks) : [];
  };