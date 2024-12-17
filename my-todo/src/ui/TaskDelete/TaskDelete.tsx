import { DeleteForever } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { FC } from "react";

interface ITaskDelete {
    onClick: () => void;
}

const TaskDelete:FC<ITaskDelete> = ({ onClick }) => {
    return (
        <IconButton onClick={onClick} color="error">
            <DeleteForever />
        </IconButton>
    );
};

export default TaskDelete;