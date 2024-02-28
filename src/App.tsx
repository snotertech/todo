import './App.css';
import Todo from './components/Todo';
import { useTodoStore } from './store';

function App() {
  const todos = useTodoStore((state) => state.todos)
  const addTodo = useTodoStore((state) => state.addTodo)

  const handleAddTodo = () => {
    const text = prompt('Enter todo:');
    if (text) addTodo(text)
  }
  
  
  return (
    <div className='app-container'>
      <button onClick={handleAddTodo}>Add</button>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
}

export default App;
