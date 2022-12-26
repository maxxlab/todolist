import { createSlice } from "@reduxjs/toolkit";
import { getDatabase, ref, set, onValue, DataSnapshot, remove } from "firebase/database";
import guid from '../../tools/tools';

interface tasksProps {
  id: string,
  text: string,
  completed: boolean
}

const initialState:{todos:object[]} = {
  todos: []
};

function writeTask(id: string, text: string, completed: boolean) {
  const db = getDatabase();
  set(ref(db, 'todo/' + id), {
    id: id,
    text: text,
    completed: completed
  });
}


const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo(state, action) {
      const uid = guid();
      state.todos.push({
        id: uid,
        text: action.payload,
        completed: false
      })
      writeTask(uid, action.payload, false);
    },
    readTasks(state, action) {
      const db = getDatabase();
      const starCountRef = ref(db, 'todo/');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if(state.todos.length === 1){
          for(let id in data) {
              state.todos.push(data[id]);
            }
        }
      });
    },
    removeTodo(state, action) {},
    toggleTodoComplete (state, action) {}
  }
});

export const {addTodo, readTasks, removeTodo, toggleTodoComplete} = todoSlice.actions;
export default todoSlice.reducer;