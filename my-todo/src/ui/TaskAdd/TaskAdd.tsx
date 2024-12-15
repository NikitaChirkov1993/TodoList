import { Button } from "@mui/material";
import style from "./TaskAdd.module.css";

const TaskAdd = ({onClick}) => {
    return (
        <Button
            onClick={onClick}
            className={style.button}
            variant="contained"
            size="medium">
            Добавить
        </Button>
    );
};

export default TaskAdd;
