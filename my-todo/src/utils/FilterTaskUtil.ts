import { Itask } from "types/types";

export const filterTasksUtil = (tasks: Itask[], filter: string) => {
    if (filter === "done") {
        return tasks.filter((el) => el.done === true);
    } else if (filter === "notDone") {
        return tasks.filter((el) => el.done === false);
    } else {
        return tasks; // Все задачи
    }
};