import TaskCheckbox from "@ui/TaskCheckbox/TaskCheckbox";
import TaskDelete from "@ui/TaskDelete/TaskDelete";
import TaskEdit from "@ui/TaskEdit/TaskEdit";
import { FC } from "react";
import { IListItem } from "types/types";
import style from "./TaskItem.module.css";

const TaskItem: FC<IListItem> = ({ handleTaskDelete, handleTaskDone, el, handleModalOpen }) => {
    if (!el) return null;
    const {done,id,title} =el
    return (
        <li className={style.item} key={id}>
            <div
                className={`${style.text} ${done ? style.completed : ""}`}>
                {title}
            </div>
            <TaskCheckbox onClick={() => handleTaskDone(id)} checked={done} />
            <TaskDelete onClick={() => handleTaskDelete(id)} />
            <TaskEdit onClick = {()=>handleModalOpen(id) } />
        </li>
    );
};

export default TaskItem;
