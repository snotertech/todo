import { create } from 'zustand'
import { TodoStore } from './types/types'



export const useTodoStore = create<TodoStore>((set) => ({
  todos: [],
  addTodo: (text: string) =>
    set((state) => ({ todos: [...state.todos, { id: Date.now(), text, completed: false }] })),
  toggleTodo: (id: number) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    })),
  deleteTodo: (id: number) =>
    set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) 
    })),
  updateTodo: (id: number, newText: string) => 
    set((state) => ({ todos: [...state.todos.map((todo) => 
      todo.id === id ? {...todo, text: newText} : todo)]}))
}));