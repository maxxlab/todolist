import { AlertTitleClassKey } from "@mui/material";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, ref, set, onValue, DataSnapshot, remove, get } from "firebase/database";
import { useSelector } from "react-redux";
import { start } from "repl";
import guid from '../../tools/tools';

interface listProps {
  id: string,
  title: string
}

const initialState:{lists:object[]} = {
  lists: []
};

export const fetchList = createAsyncThunk(
  "list/fetchList",
  async (id:object) => {
    const db = getDatabase();
    const snapshot = await get(ref(db, id + "/"));
    const data = snapshot.val();
    console.log(data)
    return data;
  }
)
function writeList(uid: string, titleID: string, title:string) {
  const db = getDatabase();
  set(ref(db, uid + "/" + titleID), {
    id:titleID,
    title:title,
  }); 
}

function deleteList(uid: string, id: string){
  const db = getDatabase();
  remove(ref(db, uid + "/" + id));
}

const listSlice = createSlice ({
  name: 'lists',
  initialState,
  reducers: {
      addList(state, action) {
        const titleID = guid();
        state.lists.push({
          id:titleID,
          title:action.payload.title
        })
        writeList(action.payload.user.id, titleID, action.payload.title);
      },
      removeList(state, action) {
        console.log(action);
        state.lists = state.lists.filter((list : any) => list.id !== action.payload.id);
        deleteList(action.payload.uid, action.payload.id);
      }
  },
  extraReducers:{
    [fetchList.fulfilled.toString()]: (state,action) => {
      if (state.lists.length === 0){
        const lists:object[] = Object.values(action.payload)
        console.log(lists)
        state.lists.push(...lists)
      }
    }
  }
})

export const {addList, removeList} = listSlice.actions;
export default listSlice.reducer;