import { Button, Grid, IconButton, ListItem, ListItemButton, ListItemIcon, ListItemText, TextField } from "@mui/material";
import { TodoProps } from '../types/types'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Checkbox from '@mui/material/Checkbox';
import { useState } from "react";
import '../index.css'


const Todo: React.FC<TodoProps> = ({ todo, onToggle, onDelete, onEdit }) => {
    const [editing, setEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text)

    const handleToggle = () => {
        onToggle(todo.id);
    }

    const handleDelete = () => {
        onDelete(todo.id);
    }

    const handleEdit = () => {
        setEditing(true);
    }

    const handleChange = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (editedText !== "") {
            onEdit(todo.id, editedText);
            setEditing(false);
        }
    }

    const handleTextClick = () => {
        setEditing(false);
    }

    const handleEditButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        handleEdit();
    };

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
            {editing ? (
                <Grid container className='edit'>
                    <TextField
                        className="edit-input"
                        autoFocus
                        value={editedText}
                        onChange={(e) => setEditedText(e.target.value)}
                    />
                    <Grid item alignItems="stretch" style={{ display: "flex" }}>
                        <Button variant="contained" onClick={handleChange}>Save</Button>
                    </Grid>
                </Grid>
            ) : (
                <ListItemButton role="undefined" onClick={handleToggle} dense>
                    <ListItemIcon>
                        <Checkbox
                            edge="start"
                            checked={todo.completed}
                            tabIndex={-1}
                            disableRipple
                        />
                    </ListItemIcon>
                    <ListItemText primary={todo.text} onClick={handleTextClick} />
                    <IconButton edge="end" aria-label="edit" onClick={handleEditButtonClick}>
                        <EditIcon />
                    </IconButton>
                </ListItemButton>
            )}
        </ListItem>
    );
};

export default Todo;
