import TaskItem from "@components/TaskItem/TaskItem";
import { FC } from "react";
import { IListItem, Itask } from "types/types";
import style from "./TaskList.module.css";

const TaskList: FC<IListItem> = ({ filteredTasks, handleTaskDelete, handleTaskDone, handleModalOpen }) => {
    if (!filteredTasks) return null;
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
