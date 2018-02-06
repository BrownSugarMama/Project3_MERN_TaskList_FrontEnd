import React, { Component } from "react";
import axios from "axios";
import "./Todos.css";
import { Link } from "react-router-dom";
import TodoAdd from "../TodoAdd/TodoAdd.js";
import Dashboard from "../Dashboard/Dashboard.js";
import BENDURL from "../../constants.js";

import { Container, Row, Col } from "reactstrap";

class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      impFilter: "High",
      compFilter: "Complete",
      ipFilter: "In-Process"
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

  sortBy(key) {
    let todosCopy = [...this.state.todos];
    todosCopy.sort(this.compareBy(key));
    this.setState({ todos: todosCopy });
  }

  componentDidMount() {
    axios.get(BENDURL + "/todo").then(response => {
      this.setState({ todos: response.data });
    });
    console.log("BENDURL: " + BENDURL + "/todo");
  }

  render() {
    // get count of important to-dos
    let impCntArr = this.state.todos.filter(todo => {
      return todo.imp === this.state.impFilter;
    });
    this.impCnt = impCntArr.length;
    console.log("IMP CNT: " + this.impCnt);

    // get count of completed to-dos
    let compCntArr = this.state.todos.filter(todo => {
      return todo.status === this.state.compFilter;
    });
    this.compCnt = compCntArr.length;
    console.log("COMP CNT: " + this.compCnt);

    // get count of in-process tasks
    let ipCntArr = this.state.todos.filter(todo => {
      return todo.status === this.state.ipFilter;
    });
    this.ipCnt = ipCntArr.length;
    console.log("IP CNT: " + this.ipCnt);

    let { history } = this.props;
    let todos = this.state.todos.map((todo, index) => {
      return (
        <div id="todos-body" key={index}>
          <Row>
            <Col xs="6">
              <Link to={`${this.props.match.url}/${todo._id}`}>
                {todo.title}
              </Link>
            </Col>
            <Col xs="2">{todo.cat}</Col>
            <Col xs="2">{todo.imp}</Col>
            <Col xs="2">{todo.status}</Col>
          </Row>
        </div>
      );
    });

    return (
      <div>
        <br />
        <Dashboard
          allCnt={this.state.todos.length}
          highCnt={this.impCnt}
          ipCnt={this.ipCnt}
          compCnt={this.compCnt}
        />
        <br />
        <Container>
          <Row id="todo-header">
            <Col xs="6" onClick={() => this.sortBy("title")}>
              title
            </Col>
            <Col xs="2" onClick={() => this.sortBy("cat")}>
              category
            </Col>
            <Col xs="2" onClick={() => this.sortBy("imp")}>
              importance
            </Col>
            <Col xs="2" onClick={() => this.sortBy("status")}>
              status
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
