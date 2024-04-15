
export const addTask = (text) => ({
    type: 'ADD_TASK',
    payload: {
      text,
      id: new Date().getTime(), // Unique ID for each task
    },
  });
  
  export const deleteTask = (id) => ({
    type: 'DELETE_TASK',
    payload: id,
  });
  