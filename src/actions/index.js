let nextToDoId = 0;
export const addTodo = text => ({
  type: 'ADD_TODO',
  id: nextToDoId++,
  text
});

export const removeTodo = id => ({
  type: 'REMOVE_TODO',
  id
});

export const toggleTodo = id => ({
  type: 'TOGGLE_TODO',
  id
});
