import { Checkbox, Tooltip } from "@mui/material";
import { FC } from "react";

interface ITaskCheckbox {
    onClick: () => void;
    checked: boolean;

}

const TaskCheckbox:FC<ITaskCheckbox> = ({ onClick,checked }) => {
    return (
        <Tooltip placement="top" title="Тогл" arrow>
            <Checkbox
            checked={checked}
            onClick={onClick}
            value="checkedA"
            inputProps={{ "aria-label": "Checkbox A" }}
        />
        </Tooltip>

    );
};

export default TaskCheckbox;