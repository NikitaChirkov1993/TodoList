import TaskCheckbox from "@ui/TaskCheckbox/TaskCheckbox";
import TaskDelete from "@ui/TaskDelete/TaskDelete";
import { FC } from "react";
import { Itask } from "types/types";
import style from "./TaskItem.module.css";

interface ITaskItem {
    el: Itask;
    handleTaskDelete: (id: number) => void;
    handleTaskDone: (id: number) => void;
}

const TaskItem:FC<ITaskItem> = ({handleTaskDelete,handleTaskDone,el}) => {
    return (
        <li className={style.item} key={el.id}>
            <div className={`${style.text} ${el.done ? style.completed : ""}`}>
                {el.title}
            </div>
            <TaskCheckbox onClick={() => handleTaskDone(el.id)} checked={el.done} />
            <TaskDelete onClick={() => handleTaskDelete(el.id)} />
        </li>
    );
};

export default TaskItem;
