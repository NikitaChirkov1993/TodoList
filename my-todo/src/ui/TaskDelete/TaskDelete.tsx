import { DeleteForever } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { FC } from "react";

interface ITaskDelete {
    onClick: () => void;
}

const TaskDelete: FC<ITaskDelete> = ({ onClick }) => {
    return (
        <Tooltip placement="top" title="Удалить" arrow>
            <IconButton onClick={onClick} color="error">
                <DeleteForever />
            </IconButton>
        </Tooltip>
    );
};

export default TaskDelete;
