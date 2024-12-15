import { ChangeEvent, useState } from "react";

export const useTaskInput = () => {
    const [taskInput, setTaskInput] = useState<string>("");

    const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskInput(e.target.value);
    };

    return {taskInput,setTaskInput,changeInput}
};
