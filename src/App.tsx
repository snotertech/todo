import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import { useTodoStore } from './store';
import { Button, Grid, TextField } from '@mui/material';
import Header from './components/Header';

function App() {
  const [inputText, setInputText] = useState('')
  const todos = useTodoStore((state) => state.todos)
  const addTodo = useTodoStore((state) => state.addTodo)
  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  const deleteTodo = useTodoStore((state) => state.deleteTodo)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
  }

  const handleAddTodo = () => {
    if (inputText !== '') {
      addTodo(inputText)
      setInputText('')
    }
  }

  const handleToggle = (id: number) => {
    toggleTodo(id)
  }

  const handleDelete = (id: number) => {
    deleteTodo(id)
  }


  return (
    <>
      <Header />
      <Grid >
        <Grid container>
          <Grid item>
            <TextField id="outlined-basic"
              label="To-do"
              variant="outlined"
              type="text"
              value={inputText}
              onChange={handleInputChange}
              fullWidth
            />
          </Grid>
          <Grid item alignItems="stretch" style={{ display: "flex" }}>
            <Button variant="contained" onClick={handleAddTodo}>Add</Button>
          </Grid>
        </Grid>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} onToggle={handleToggle} onDelete={handleDelete}/>
        ))}
      </Grid>
    </>
  );
}

export default App;
