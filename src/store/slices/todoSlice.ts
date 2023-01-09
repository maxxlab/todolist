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
interface fetchProps{
  id:string,
  title:string
}

const initialState:{todos:object[]} = {
  todos: []
};

function writeTask(uid: string, id: string, text: string, completed: boolean, titleID:string) {
  const db = getDatabase();
  set(ref(db, uid + "/" + titleID + '/todo/' + id), {
    id: id,
    text: text,
    completed: completed
  });
}

export const fetchTodo = createAsyncThunk(
  "todos/fetchTodos",
  async (props:{userID:string, titleID:string}) => {
    const db = getDatabase();
    const snapshot = await get(ref(db, props.userID + "/" + props.titleID + '/todo/'));
    const data = snapshot.val();
    console.log(data)
    return data||{};
  }
)

function deleteTask(uid: string, id: string, titleID: string){
  const db = getDatabase();
  remove(ref(db, uid + "/" + titleID +'/todo/' + id));
}


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
      console.log(action.payload.user.id + "/" + action.payload.titleID + '/todo/' + uid);
      writeTask(action.payload.user.id, uid, action.payload.text, false, action.payload.titleID);
    },
    removeTodo(state, action) {
      console.log(action)
      state.todos = state.todos.filter((todo : any) => todo.id !== action.payload.id);
      deleteTask(action.payload.user.id, action.payload.id, action.payload.titleID);
    },
    toggleTodoComplete (state, action) {
      const toggledTodo : any = state.todos.find((todo :any) => todo.id === action.payload.id);
      toggledTodo.completed = !toggledTodo.completed;
    }
  },
  extraReducers:{
    [fetchTodo.fulfilled.toString()]: (state,action) => {
      state.todos = [];
        const todo:object[] = Object.values(action.payload)
        state.todos.push(...todo)
        console.log(todo)
    }
  }
});

export const {addTodo, removeTodo, toggleTodoComplete} = todoSlice.actions;
export default todoSlice.reducer;