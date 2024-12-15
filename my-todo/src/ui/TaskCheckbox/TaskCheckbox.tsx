import { Checkbox } from "@mui/material";

const TaskCheckbox = ({ handleTaskDone,checked }) => {
    return (
        <Checkbox
            checked={checked}
            onClick={handleTaskDone}
            value="checkedA"
            inputProps={{ "aria-label": "Checkbox A" }}
        />
    );
};

export default TaskCheckbox;