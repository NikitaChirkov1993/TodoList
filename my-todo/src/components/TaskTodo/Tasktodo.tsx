import TaskFilter from "@components/TaskFilter/TaskFilter";
import TaskList from "@components/TaskList/TaskList";
import { useTodo } from "@helpers/useTodo";
import ModalTaskEdit from "@ui/ModalTaskEdit/ModalTaskEdit";
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
        isVisibleModal,
        handleModalOpen,
        handleModalClose,
        taskEditInput,
        onChangeEditInput,
        handleTaskEditAdd,
    } = useTodo();

    console.log(taskEditInput);


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
                handleModalOpen={handleModalOpen}
            />

            <ModalTaskEdit
                isVisibleModal={isVisibleModal}
                handleModalClose={handleModalClose}
                taskEditInput={taskEditInput}
                onChangeEditInput={onChangeEditInput}
                handleTaskEditAdd={handleTaskEditAdd}
            />

        </div>
    );
};

export default TaskTodo;
