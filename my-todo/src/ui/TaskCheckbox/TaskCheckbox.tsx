import { Checkbox } from "@mui/material";
import { FC } from "react";

interface ITaskCheckbox {
    onClick: () => void;
    checked: boolean;

}

const TaskCheckbox:FC<ITaskCheckbox> = ({ onClick,checked }) => {
    return (
        <Checkbox
            checked={checked}
            onClick={onClick}
            value="checkedA"
            inputProps={{ "aria-label": "Checkbox A" }}
        />
    );
};

export default TaskCheckbox;