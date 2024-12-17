import { ChangeEvent, useState } from "react";

export const useTaskInput = () => {
    const [taskInput, setTaskInput] = useState<string>("");

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskInput(e.target.value);
    };

    return {taskInput,setTaskInput,onChangeInput}
};
