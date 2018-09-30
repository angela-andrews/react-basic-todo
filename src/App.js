import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';


class App extends Component {
  state = {
    todos: [
      {id: 1, content: "Learn React"},
      {id: 2, content: "Redo Pupster App"}
    ]
}
  deleteTodo =(id)=> {
    console.log(id);
    //filter is nondestructive return if id not id(from clicked)
    const todos = this.state.todos.filter(todo => {
      return todo.id !==id
    })
    this.setState({
      //key and value have same name, only type the key
      todos
    })
  }

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos= [...this.state.todos, todo]
    this.setState({
      todos:todos
    })
  }
  render() {
    return (
      <div className="todo-app container ">
       <h1 className="center blue-text">Daily Todo List</h1> 
       <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
       <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
