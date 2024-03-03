import React, { useState } from 'react';
import { Button, Grid, TextField } from '@mui/material';
import { TodoFormProps } from '../types/types';


const TodoForm: React.FC<TodoFormProps> = ({ onAddTodo }) => {
    const [inputText, setInputText] = useState('')

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value)
    }

    const handleAddTodo = () => {
        if(inputText !== '') {
            onAddTodo(inputText)
            setInputText('')
        }
    }

    return (
        <Grid container className='add-todo'>
        <Grid item>
          <TextField
            id='outlined-basic'
            label='To-do'
            variant='outlined'
            type='text'
            value={inputText}
            onChange={handleInputChange}
            fullWidth
          />
        </Grid>
        <Grid item alignItems='stretch' style={{ display: 'flex' }}>
          <Button variant='contained' onClick={handleAddTodo}>
            Add
          </Button>
        </Grid>
      </Grid>
    );
  };
  
  export default TodoForm;