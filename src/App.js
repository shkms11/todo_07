import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import ListGroup from "react-bootstrap/ListGroup";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      list: [],
    };
  }

  updateInput(value) {
    this.setState({ userInput: value });
  }

  addItem() {
    if (this.state.userInput !== "") {
      const userInput = {
        id: Math.random(),

        value: this.state.userInput,
      };

      const list = [...this.state.state.list, userInput];

      this.setState({
        list,
        userInput: "",
      });
    }
  }

  deleteItem(key) {
    const list = [...this.state.list];
    const updateList = list.filter((item) => item.id !== key);

    this.setState({
      list: updateList,
    });
  }

  editItem = (index) => {
    const todos = [...this.state.list];

    const editedTodo = prompt("Edit the todo: ");
    if (editedTodo !== null && editedTodo.trim() !== "") {
      let updatedTodos = [...todos];
      updatedTodos[index].value = editedTodo;
      this.setState({
        list: updatedTodos,
      });
    }
  };
  render() {
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }
}

export default App;
