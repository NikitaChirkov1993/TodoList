import { DeleteForever } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const TaskDelete = ({ handeleTaskDelete }) => {
    return (
        <IconButton onClick={handeleTaskDelete} color="error">
            <DeleteForever />
        </IconButton>
    );
};

export default TaskDelete;