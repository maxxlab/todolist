import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, ref, set, onValue, DataSnapshot, remove, get } from "firebase/database";
import { start } from "repl";
import { useAppSelector } from '../../hooks/redux-hooks';
import guid from '../../tools/tools';

import {useAuth} from '../../hooks/use-auth';

interface tasksProps {
  id: string,
  text: string,
  completed: boolean
}

const initialState:{todos:object[]} = {
  todos: []
};

function writeTask(uid: string, id: string, text: string, completed: boolean) {
  const db = getDatabase();
  set(ref(db,  uid + '/todo/' + id), {
    id: id,
    text: text,
    completed: completed
  });
}

export const fetchTodo = createAsyncThunk(
  "todos/fetchTodos",
  async () => {
    const db = getDatabase();
    const snapshot = await get(ref(db, '/todo/'));
    const data = snapshot.val();
    return data;
  }
)


export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async () => {
    const {isAuth, id} = useAuth();
    return id;
  }
)

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      const uidTask = guid();
      state.todos.push({
        id: uidTask,
        text: action.payload.text,
        completed: false
      })
      writeTask(action.payload.user.id, uidTask, action.payload.text, false);
    },
    readTasks(state, action) {
      const db = getDatabase();
      const starCountRef = ref(db, 'todo/');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        state.todos.push(Object.values(data));
      });
    },
    removeTodo(state, action) {},
    toggleTodoComplete (state, action) {}
  },
  extraReducers:{
    [fetchTodo.fulfilled.toString()]: (state,action) => {
      if (state.todos.length === 0){
        const todo:object[] = Object.values(action.payload)
        state.todos.push(...todo)
        console.log(todo)
      }
    }
  }
});

export const {addTodo, readTasks, removeTodo, toggleTodoComplete} = todoSlice.actions;
export default todoSlice.reducer;