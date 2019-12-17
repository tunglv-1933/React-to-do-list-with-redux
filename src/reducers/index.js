const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          done: false
        }
      ]
    case 'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done} : todo
      )
    case 'REMOVE_TODO':
      for( var i = 0; i < state.length; i++){
        if ( state[i].id === action.id) {
          state.splice(i, 1);
        }
      }
      return state;
    default:
      return state
  }
}

export default todos;
