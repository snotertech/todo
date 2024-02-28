import { TodoInterface } from "../types/TodoInterface";

interface TodoProps {
    todo: TodoInterface;
}

const Todo: React.FC<TodoProps> = ({ todo }) => {
    return (
        <div className="todo">
            <p>{todo.text}</p>
        </div>
    );
};

export default Todo;
