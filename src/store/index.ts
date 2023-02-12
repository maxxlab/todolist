import {combineReducers, configureStore, createStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';
import todoReducer from './slices/todoSlice';
import listReducer from './slices/listSlice';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import createPersistoid from 'redux-persist/es/createPersistoid';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    todos: todoReducer,
    lists: listReducer
  }
});
export const persistor = persistStore(store);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;