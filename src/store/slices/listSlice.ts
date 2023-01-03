import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDatabase, ref, set, onValue, DataSnapshot, remove, get } from "firebase/database";
import { useSelector } from "react-redux";
import { start } from "repl";
import guid from '../../tools/tools';

const initialState:{lists:object[]} = {
  lists: []
};

const listSlice = createSlice ({
  name: 'lists',
  initialState,
  reducers: {
      addList(state, action) {
        state.lists.push({
          title: action.payload
        })
      }
  }
})

export const {addList} = listSlice.actions;
export default listSlice.reducer;