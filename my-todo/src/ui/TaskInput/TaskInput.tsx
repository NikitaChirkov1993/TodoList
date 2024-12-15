import { TextField } from "@mui/material";
import style from './TaskInput.module.css';

const TaskInput = ({ taskInput, changeInput }) => {

    return (
        <div className={style.from__input}>
            <TextField
                onChange={changeInput}
                value={taskInput}
                label="Напишите задачу"
                variant="outlined"
                size="medium"
                fullWidth
            />
        </div>
    );
};

export default TaskInput;