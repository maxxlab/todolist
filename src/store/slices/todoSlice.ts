import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, ref, set, onValue, DataSnapshot, remove, get } from "firebase/database";
import { useSelector } from "react-redux";
import { start } from "repl";
import guid from '../../tools/tools';

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
  set(ref(db, uid + '/todo/' + id), {
    id: id,
    text: text,
    completed: completed
  });
}

export const fetchTodo = createAsyncThunk(
  "todos/fetchTodos",
  async (id: string) => {
    const db = getDatabase();
    const snapshot = await get(ref(db, id + '/todo/'));
    const data = snapshot.val();
    return data;
  }
)
const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      const uid = guid();
      state.todos.push({
        id: uid,
        text: action.payload.text,
        completed: false
      })
      writeTask(action.payload.user.id, uid, action.payload.text, false);
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