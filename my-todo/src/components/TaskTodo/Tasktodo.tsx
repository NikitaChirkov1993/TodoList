import TaskFilter from "@components/TaskFilter/TaskFilter";
import TaskList from "@components/TaskList/TaskList";
import { useTask } from "@helpers/useTask";
import TaskAdd from "@ui/TaskAdd/TaskAdd";
import TaskInput from "@ui/TaskInput/TaskInput";
import style from "./Tasktodo.module.css";

const TaskTodo = () => {
    const {
        filteredTasks,
        handleTaskAdd,
        handleTaskDelete,
        handleTaskDone,
        handleFilterChange,
        onChangeInput,
        taskInput,
    } = useTask()

    return (
        <div className={style.wrapper}>

            <TaskFilter onChange={handleFilterChange}/>

            <form className={style.form__taskTodo} onSubmit={handleTaskAdd}>
                <TaskInput onChange={onChangeInput} value={taskInput} />
                <TaskAdd/>
            </form>

            <TaskList
                filteredTasks={filteredTasks}
                handleTaskDone={handleTaskDone}
                handleTaskDelete={handleTaskDelete}
            />

        </div>
    );
};

export default TaskTodo;
