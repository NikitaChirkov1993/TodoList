export interface Itask {
    title: string;
    id: number;
    done: boolean;
}

export interface IListItem {
    el?: Itask;
    handleTaskDelete: (id: number) => void;
    handleTaskDone: (id: number) => void;
    handleModalOpen: (id: number) => void;
    filteredTasks?: Itask[];
}
