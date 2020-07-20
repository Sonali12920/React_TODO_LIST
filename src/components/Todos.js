import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        deltTodo={this.props.deltTodo}
      />
    ));
  }
}

//PropTypes
Todos.PropTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired,
  deltTodo: PropTypes.func.isRequired
};
export default Todos;
