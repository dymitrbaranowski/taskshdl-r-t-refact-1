import { createAction, nanoid } from '@reduxjs/toolkit';

export const addTask = createAction('tasks/addTask', text => {
  return {
    payload: {
      id: nanoid(),
      text,
      completed: false,
    },
  };
});

export const deleteTask = createAction('tasks/deleteTask', id => {
  return {
    payload: id,
  };
});

export const toggleCompleted = createAction('tasks/toggleCompleted', id => {
  return {
    payload: id,
  };
});

export const setStatusFilter = createAction(
  'filters/setStatusFilter',
  status => {
    return {
      payload: status,
    };
  }
);
