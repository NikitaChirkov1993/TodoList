import { ChangeEvent, useState } from "react";

export const useTaskEditInput = () => {
    const [taskEditInput, setTaskEditInput] = useState<string>("");

        const onChangeEditInput = (e: ChangeEvent<HTMLInputElement>) => {
            setTaskEditInput(e.target.value);
        };

        return {taskEditInput,setTaskEditInput,onChangeEditInput}
}