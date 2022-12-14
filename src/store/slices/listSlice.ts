import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, ref, set, onValue, DataSnapshot, remove, get } from "firebase/database";
import { useSelector } from "react-redux";
import { start } from "repl";
import guid from '../../tools/tools';

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

export const {addList} = listSlice.actions;
export default listSlice.reducer;