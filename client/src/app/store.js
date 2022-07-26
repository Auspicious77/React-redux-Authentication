import { configureStore } from '@reduxjs/toolkit';
import reducerSlice from '../Reducers/AuthReducer';
import TodoReducers from '../Reducers/TodoReducers';


export const store = configureStore({
  reducer: {
    user: reducerSlice,
    todos: TodoReducers
  },
});
