import React from 'react';
import "./components/TodoComponents/Todo.css";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todoData = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: true
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todoData
    }
  }

  toggleCompleted = (id) => {
    this.setState({ 
      todos: this.state.todos.map(todo => {
        if (id === todo.id) {
          return {...todo, completed: !todo.completed} 
        }
        else {
          return todo;
        }
      })
    })
  }

  addTodo = task => { 
    this.setState({
      todos: [...this.state.todos, { 
        task: task,
        id: Date.now(),
        completed: false
      }]
    })
  }

  filterCompleted = () => {
    console.log("Filter complete: ");
    this.setState({
      todos: this.state.todos.filter(todo => {
        return !todo.completed
      })
    })
  }



  render() {
    console.log(this.state);
    return (
      <div className="to-do-app">
        <h2>I love todo lists</h2>
      </div>
    )
  }
  render() {
    console.log(this.state);
    return (
      <div className="to-do-app">
        <h2>Today's Most Important Tasks</h2>
        <p>
          <TodoList todos={this.state.todos}
                    toggleCompleted={this.toggleCompleted}
          />
        </p>
        <TodoForm addTodo={this.addTodo}
                  filterCompleted={this.filterCompleted}
        />
    
      </div>
    );
  }
}

export default App;
