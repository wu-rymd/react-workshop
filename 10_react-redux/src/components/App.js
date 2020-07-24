import React, { Component } from 'react';
import { connect } from 'react-redux';
import changeName from '../actions/ChangeName';
import addTodo from '../actions/AddTodo';

const Name = props => (
    <h1>Hello, your name is: {props.name ? props.name : "(NULL)"}</h1>
);

const TodoList = props => (
    <ul>
      {
          props.todos && props.todos.length
          ? props.todos.map((todo, key) => (
              <li key={key}> { todo } </li>
            ))
          : "No tasks!"
      }
    </ul>
);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { nameInput: "", todoInput: "" };
    }

    updateNameInput = input => {
        this.setState({nameInput: input});
    }

    updateTodoInput = input => {
        this.setState({todoInput: input});
    }

    handleChangeName = () => {
        this.props.changeName(this.state.nameInput);
        this.setState({ nameInput: "" });  //reset form
    }

    handleAddTodo = () => {
        this.props.addTodo(this.state.todoInput);
        this.setState({ todoInput: "" });  //reset form
    }
    
    render() {
        return (
            <div>
              <input placeholder="Name"
                     onChange={e => this.updateNameInput(e.target.value)}
                     value={this.state.nameInput}
              />
              <button onClick={this.handleChangeName}>Change Name </button>

              <br />
              
              <input placeholder="Add to-do"
                     onChange={e => this.updateTodoInput(e.target.value)}
                     value={this.state.todoInput}
              />
              <button onClick={this.handleAddTodo}>Add To-do</button>

              <Name name={this.props.name} />
              <h1> Your To-Do List:  </h1>
              <TodoList todos={this.props.todos} />
            </div>
        );
    }
}

const mapStateToProps = store => (
    {
        name: store.name,
        todos: store.todo
    }
);

export default connect(mapStateToProps, {changeName, addTodo})(App);
