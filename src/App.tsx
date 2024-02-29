import './App.css';
import Todo from './components/Todo';
import { useTodoStore } from './store';
import { Grid } from '@mui/material';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
function App() {
  const todos = useTodoStore((state) => state.todos)
  const addTodo = useTodoStore((state) => state.addTodo)
  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  const deleteTodo = useTodoStore((state) => state.deleteTodo)
  const updateTodo = useTodoStore((state) => state.updateTodo)


  const handleToggle = (id: number) => {
    toggleTodo(id)
  }

  const handleDelete = (id: number) => {
    deleteTodo(id)
  }

  const handleEdit = (id: number, newText: string) => {
    updateTodo(id, newText)
  }


  return (
    <>
      <Header />
      <div className='app-container'>
        <TodoForm onAddTodo={addTodo} />
        <Grid container>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              onToggle={handleToggle}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </Grid>
      </div>
    </>
  );
}

export default App;
