export interface TodoInterface {
    id: number;
    text: string;
    completed: boolean;
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