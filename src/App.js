import React from 'react';
import './App.css';
import TodoList from './components/TodoList';
import FormAddTodo from './components/FormAddTodo';

function App() {
  return (
    <div className="App">
      <FormAddTodo />
      <TodoList />
    </div>
  );
}

export default App;
