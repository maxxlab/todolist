import { createSlice } from "@reduxjs/toolkit";
import guid from '../../tools/tools';

interface tasksProps {
  id: string,
  text: string,
  completed: boolean
}

const initialState = {
  todos: [{}]
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: guid(),
        text: action.payload,
        completed: false
      })
    },
    removeTodo(state, action) {},
    toggleTodoComplete (state, action) {}
  }
});

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions;
export default todoSlice.reducer;