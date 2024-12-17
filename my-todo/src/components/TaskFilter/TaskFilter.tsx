import { ChangeEvent, FC } from "react";
import style from "./TaskFilter.module.css";

interface ITaskFilter {
    onChange: (event: ChangeEvent<HTMLSelectElement>) => void ;
}

const TaskFilter: FC<ITaskFilter> = ({ onChange }) => {
    return (
        <div className={style.form__selected}>
            <select name="filter-todo" id="filter-task" onChange={onChange}>
                <option value="">Все задачи</option>
                <option value="done">Выполненные задачи</option>
                <option value="notDone">Не выполненные задачи</option>
            </select>
        </div>
    );
};

export default TaskFilter;
