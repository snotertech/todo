export interface TodoInterface {
    id: number;
    text: string;
    completed: boolean;
}

export interface TodoStore {
    todos: TodoInterface[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
    updateTodo: (id: number, newText: string) => void;
}


export interface TodoProps {
    todo: TodoInterface;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
    onEdit: (id: number, newText: string) => void;
}

export interface TodoFormProps {
    onAddTodo: (text: string) => void
}