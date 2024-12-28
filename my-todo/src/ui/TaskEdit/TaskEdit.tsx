import Edit from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

const TaskEdit = ({ onClick }) => {
    return (
        <Tooltip placement="top" title="Редактировать" arrow>
            <IconButton onClick={onClick} color="primary" aria-label="edit">
                <Edit />
            </IconButton>
        </Tooltip>
    );
};

export default TaskEdit;
