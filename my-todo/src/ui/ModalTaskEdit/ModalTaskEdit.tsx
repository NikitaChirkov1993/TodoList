import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import { ChangeEvent, FC } from "react";

interface IModalTaskEdit {
    isVisibleModal: boolean;
    handleModalClose: () => void;
    taskEditInput: string;
    onChangeEditInput: (e: ChangeEvent<HTMLInputElement>) => void;
    handleTaskEditAdd:() => void;
}

const ModalTaskEdit:FC<IModalTaskEdit> = ({isVisibleModal,handleModalClose,taskEditInput,onChangeEditInput,handleTaskEditAdd}) => {
    return (
        <div>
            <Dialog
                PaperProps={{ sx: { padding: '20px', width: '400px' } }} aria-labelledby="form-dialog-title"
                open={isVisibleModal}>
                <TextField
                    value={taskEditInput}
                    onChange={onChangeEditInput}
                    autoFocus
                    margin="dense"
                    id="name" label="Редактировать задачу"
                    type="text"
                    fullWidth />
                <DialogActions>
                    <Button onClick={handleModalClose} color="primary">Отмена</Button>
                    <Button onClick={handleTaskEditAdd} color="primary">Применить</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ModalTaskEdit;
