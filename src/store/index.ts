import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import todoReducer from './slices/todoSlice';
import listReducer from './slices/listSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    todos: todoReducer,
    lists: listReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;