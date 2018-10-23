import React from "react";
import withTodos from "./withTodos";

//Change this component however you'd like
class TodoList extends React.Component {
  constructor() {
    super()

    this.state = {
      todoInput: ''
    }
  }

  inputTodo = (e) => {
    this.setState({todoInput: e.target.value})
  }

  addTodo = () => {
    this.props.addTodo(this.state.todoInput)
    this.setState({todoInput: ''})
  }

  removeTodo = (index) => {
    this.props.removeTodo(index)
  }

  toggleFinished = (index) => {
    this.props.toggleTodoFinished(index)
  }

  render() {
    const { todos } = this.props;
    console.log(this.props);
    console.log(this.state)
    let mappedTodos = todos.map((todo, i) => (
      <div style={{display: 'flex'}} key={todo.text + i}>
        <span 
          style={todo.finished ? {textDecoration: 'line-through', color: 'red', cursor: 'pointer'} : {color: 'green', cursor: 'pointer'}} 
          onClick={() => this.toggleFinished(i)}
        >
          {todo.text}
        </span>
        <span
          onClick={() => this.removeTodo(i)} 
          style={{cursor: 'pointer', paddingLeft: '12px'}}
        >
        X
        </span>
      </div>
    ))
    return (
      <div>
        <p>If green, task has not been completed. If red, task has been completed. Click X to remove task.</p>
        <input value={this.state.todoInput} onChange={this.inputTodo}/>
        <button onClick={this.addTodo}>Add To Do</button>
        <br/>
        {mappedTodos}
      </div>
    );
  }
}

export default withTodos(TodoList);
