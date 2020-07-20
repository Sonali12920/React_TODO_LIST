import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    // if(this.props.todo.completed){
    //   return{
    //     textDecoration:'Line-through'
    //   }
    // }
    // else{
    //   return{
    //     textDecoration:'none'
    //   }
    // }
    return {
      background: "#cbeaed",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "Line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <button onClick={this.props.deltTodo.bind(this, id)} style={btnStyle}>
            X
          </button>
        </p>
      </div>
    );
  }
}
//PropTypes
TodoItem.PropTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  deltTodo: PropTypes.func.isRequired
};

const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  padding: "5px 9px",
  cursor: "pointer",
  borderRadius: "50%",
  float: "right"
};

// const itemStyle = {
//   backgroundColor: "#eeeeee"
// };
export default TodoItem;
