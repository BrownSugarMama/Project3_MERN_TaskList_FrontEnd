import React, { Component } from "react";
import axios from "axios";
import "./Todos.css";
// import { Link, Route } from 'react-router-dom'
import { Link } from "react-router-dom";
import TodoAdd from "../TodoAdd/TodoAdd.js";
// import Url from from "../Url.js"

import { Container, Row, Col } from "reactstrap";
// import { SortableContainer, SortableElement, arrayMove } form 'react-sortable-hoc'

// Todo Component
class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.compareBy.bind(this);
    this.sortBy.bind(this);
  }

  // sourced from: https://codepen.io/austinlyons/pen/YpmyJB
  compareBy(key) {
    return function(a, b) {
      if (a[key] < b[key]) return -1;
      if (a[key] > b[key]) return 1;
      return 0;
    };
  }

  // sourced from: https://codepen.io/austinlyons/pen/YpmyJB
  sortBy(key) {
    let todosCopy = [...this.state.todos];
    todosCopy.sort(this.compareBy(key));
    this.setState({ todos: todosCopy });
  }

  componentDidMount() {
    axios.get("http://localhost:3001/todo").then(response => {
      this.setState({ todos: response.data });
    });
  }

  render() {
    let { history } = this.props;
    let todos = this.state.todos.map((todo, index) => {
      return (
        <div id="todos-body" key={index}>
          <Row>
            <Col xs="6">
              <Link
                to={`${this.props.match.url}/${todo._id}`}
                // onClick={this.props.setTodo}
              >
                <span id="todo-title">{todo.title}</span>
              </Link>
            </Col>
            <Col xs="2">
              <span id="todo-columns">{todo.cat}</span>
            </Col>
            <Col xs="2">
              <span id="todo-columns">{todo.imp}</span>
            </Col>
            <Col xs="2">
              <span id="todo-columns">{todo.status}</span>
            </Col>
          </Row>
        </div>
      );
    });

    return (
      <div>
        <Container>
          <Row id="todos-table-header">
            <Col xs="6" onClick={() => this.sortBy("title")}>
              TITLE
            </Col>
            <Col xs="2" onClick={() => this.sortBy("cat")}>
              CATEGORY
            </Col>
            <Col xs="2" onClick={() => this.sortBy("imp")}>
              IMPORTANCE
            </Col>
            <Col xs="2" onClick={() => this.sortBy("status")}>
              STATUS
            </Col>
          </Row>

          {todos}
        </Container>
        <TodoAdd history={history} />
      </div>
    );
  }
}

export default Todos;
