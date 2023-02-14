import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, ref, set, remove, get, update } from "firebase/database";
import guid from '../../tools/tools';


const initialState:{todos:object[]} = {
  todos: []
};

function writeTask(uid: string, id: string, text: string, completed: boolean, titleID:string, isShine:boolean) {
  const db = getDatabase();
  set(ref(db, uid + "/" + titleID + '/todo/' + id), {
    id: id,
    text: text,
    completed: completed,
    isShine: isShine
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

function completeChanger(uid: string, titleID:string, id: string, completedState:boolean){
  const db = getDatabase();
  update(ref(db, uid + "/" + titleID + "/todo/" + id), {completed: completedState})
}

function changeStarShine(uid: string, titleID:string, id: string, isShine:boolean){
  const db = getDatabase();
  update(ref(db, uid + "/" + titleID + "/todo/" + id), {isShine: isShine})
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
        completed: false,
        isShine:false
      })
      console.log(action.payload.user.id + "/" + action.payload.titleID + '/todo/' + uid);
      writeTask(action.payload.user.id, uid, action.payload.text, false, action.payload.titleID, false);
    },
    removeTodo(state, action) {
      console.log(action)
      state.todos = state.todos.filter((todo : any) => todo.id !== action.payload.id);
      deleteTask(action.payload.user.id, action.payload.id, action.payload.titleID);
    },
    toggleTodoComplete (state, action) {
      const toggledTodo : any = state.todos.find((todo :any) => todo.id === action.payload.id);
      toggledTodo.completed = !toggledTodo.completed;
      completeChanger(action.payload.user.id, action.payload.titleID, action.payload.id, toggledTodo.completed);
    },
    toggleTodoIsStarShine(state, action){
      const toggledTodo : any = state.todos.find((todo :any) => todo.id === action.payload.id);
      toggledTodo.isShine = !toggledTodo.isShine;
      changeStarShine(action.payload.user.id, action.payload.titleID, action.payload.id, toggledTodo.isShine);
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

export const {addTodo, removeTodo, toggleTodoComplete, toggleTodoIsStarShine} = todoSlice.actions;
export default todoSlice.reducer;