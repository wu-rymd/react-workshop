import React, {Component} from 'react';
import Todo from "./Todo";

const listStyle = {
    padding: 15,
    border: "1px solid black",
    margin: "20px 10px",
    borderRadius: 5
};

const stuffTodo = ["Make bed", "Brush teeth", "Make breakfast", "Eat breakfast"]

class List extends Component {
    componentDidMount() {
        console.log("List mounted");
    }

    render() {
        return (
            <div style={listStyle}>
              <h1>My list</h1>
              <h3>Exploring building list components from a JS array.</h3>
              <Todo actionables={stuffTodo} />
            </div>
        );
    }
}

export default List;
