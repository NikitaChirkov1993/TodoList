import { TextField } from "@mui/material";
import { ChangeEvent, FC } from "react";
import style from './TaskInput.module.css';

interface ITaskInput {
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
}

const TaskInput:FC<ITaskInput> = ({ onChange, value }) => {

    return (
        <div className={style.from__input}>
            <TextField
                onChange={onChange}
                value={value}
                label="Напишите задачу"
                variant="outlined"
                size="medium"
                fullWidth
            />
        </div>
    );
};

export default TaskInput;