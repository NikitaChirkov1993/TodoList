import TaskItem from "@components/TaskItem/TaskItem";
import { FC } from "react";
import { Itask } from "types/types";
import style from "./TaskList.module.css";

interface ITaskList {
    filteredTasks: Itask[];
    handleTaskDelete: (id: number) => void;
    handleTaskDone: (id: number) => void;
    handleModalOpen: (id: number) => void;
}

const TaskList: FC<ITaskList> = ({ filteredTasks, handleTaskDelete, handleTaskDone, handleModalOpen }) => {
    return (
        <ul className={style.list}>
            {filteredTasks.length > 0 ? (
                filteredTasks.map((el: Itask) => (
                    <TaskItem
                        el={el}
                        handleTaskDone={() => handleTaskDone(el.id)}
                        handleTaskDelete={() => handleTaskDelete(el.id)}
                        handleModalOpen={()=>handleModalOpen(el.id)} />
                ))
            ) : (
                <div className={style.noTasks}>Задач нету!</div>
            )}
        </ul>
    );
};

export default TaskList;
