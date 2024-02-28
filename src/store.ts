import {create} from 'zustand'
import { TodoInterface } from './types/TodoInterface'

interface TodoStore {
    todos: TodoInterface[];
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    deleteTodo: (id: number) => void;
}

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
      set((state) => ({ todos: state.todos.filter((todo) => todo.id !== id) })),
  }));