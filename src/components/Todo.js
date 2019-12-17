import React from 'react';
import PropTypes from 'prop-types';

const Todo = ({ onClick, removeClick, done, text }) => (
  <li onClick={onClick} className={done ? 'done' : ''}>
    <button onClick={removeClick}>Remove</button>{text}
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  removeClick: PropTypes.func.isRequired,
  done: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;
