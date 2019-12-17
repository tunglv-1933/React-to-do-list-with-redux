import React, { Component } from 'react';
import Todo from './Todo';
import { removeTodo, toggleTodo } from '../actions';
import { connect } from 'react-redux';

class ToDoList extends Component {

  render() {

    if (this.props.todos !== undefined && this.props.todos.length !== 0) {
      return (
        <ul>
          {this.props.todos.map( todo => (
            <Todo key={todo.id} {...todo} onClick={() => this.props.toggleTodo(todo.id)} removeClick={() => this.props.removeTodo(todo.id)}/>
          ))}
        </ul>
      )
    } else {
      return (<div>Empty to do</div>)
    }
  }
}


const mapStateToProps = state => ({
  todos: state
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  removeTodo: id => dispatch(removeTodo(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
