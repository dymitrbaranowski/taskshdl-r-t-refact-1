import { configureStore } from '@reduxjs/toolkit';
//=============== Before ========================
// import { tasksReducer, filtersReducer } from "./reducer";
//=============== After ========================
import { tasksReducer } from './taskSlice';
import { filtersReducer } from './filterSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
