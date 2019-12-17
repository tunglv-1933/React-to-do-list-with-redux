import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';


class FormAddTodo extends Component {
  render() {

    const handleSubmitAddTodo = (event) => {
      event.preventDefault();
      this.props.addTodo(event.target.to_do.value);
    }

    return(
      <form onSubmit={(e) => handleSubmitAddTodo(e)}>
        <input type="text" name="to_do" />
        <button type="submit">Add</button>
      </form>
    )
  }
}

const mapDispatchtoProps = dispatch => ({
  addTodo: (text) => dispatch(addTodo(text))
})

export default connect(null, mapDispatchtoProps)(FormAddTodo);
