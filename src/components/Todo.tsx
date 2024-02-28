import { IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { TodoInterface } from "../types/TodoInterface";
import DeleteIcon from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';

interface TodoProps {
    todo: TodoInterface;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, onToggle, onDelete }) => {

    const handleToggle = () => {
        onToggle(todo.id)
    }

    const handleDelete = () => {
        onDelete(todo.id)
    }

    return (
        <ListItem
            key={todo.id}
            secondaryAction={
                <IconButton edge="end" aria-label="delete" onClick={handleDelete}>
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role="undefined" onClick={handleToggle} dense>
                <ListItemIcon>
                    <Checkbox 
                        edge="start"
                        checked={todo.completed}
                        tabIndex={-1}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText primary={todo.text} />
            </ListItemButton>
        </ListItem>
    );
};

export default Todo;
