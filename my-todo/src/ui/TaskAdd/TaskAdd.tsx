import { Button } from "@mui/material";
import { FC } from "react";
import style from "./TaskAdd.module.css";


const TaskAdd:FC = () => {
    return (
        <Button
            type="submit"
            className={style.button}
            variant="contained"
            size="medium">
            Добавить
        </Button>
    );
};

export default TaskAdd;
