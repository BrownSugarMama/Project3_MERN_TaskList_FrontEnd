<<<<<<< HEAD
import React, { Component } from "react";
import axios from "axios";
import "./Todos.css";
// import { Link, Route } from 'react-router-dom'
import { Link } from "react-router-dom";
// import TodoAdd from "./TodoAdd/TodoAdd.js";
// import Url from from "../Url.js"
=======
import React, { Component } from 'react'
import axios from "axios"
import "./Todos.css"
import { Link, Route } from 'react-router-dom'
import TodoAdd from "./TodoAdd/TodoAdd.js"
import Url from "./components/url.js"
>>>>>>> 857d66d84de15671a8f429e133cc09a9e1af5865

import { Container, Row, Col } from "reactstrap";

    // Todo Component
class Todos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
  }

<<<<<<< HEAD
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
                onClick={this.props.setTodo}
              >
                <span id="todo-title">{todo.title}</span>
              </Link>
            </Col>
            <Col xs="2">{todo.cat}</Col>
            <Col xs="2">{todo.imp}</Col>
            <Col xs="2">{todo.status}</Col>
          </Row>
        </div>
      );
    });
=======
      componentDidMount() {
        axios
          .get ( Url )
          .then(response => {
            this.setState({
              todos: response.data
            });
          });
      }
    
    //   "this.prop.match.url" may not be needed
        render() {
            let { history } = this.props;
            let todos = this.state.todos.map((todo, index) => {
              return (
                <div id="todos-body" key={index}>
                  <Container>
                    <Row>
                        <Col xs="auto">
                            <Link to={`${this.props.match.url}/${todo.titles}`}
                            onClick= {this.props.setTodo}
                            <span id= "todos-title"> {todo.title} </span>{" "}
                            </Link>
                         </Col>  

                        <Col xs="3"> 
                             <span id="todos-desc">{todo.description}</span>
                        </Col>

                        <Col xs="3"> 
                             <span id="todos-imp">{todo.importance}</span>
                        </Col>
                    </Row>
                    </Container>
                </div>
              )
            })
            // TodoAdd Component
            return (
                <div>
                  {todos}
                  <Todo history={history} />
                </div>
              );
    }
}
>>>>>>> 857d66d84de15671a8f429e133cc09a9e1af5865

    return (
      <div>
        <Container>
          <Row id="todos-table-header">
            <Col xs="6">Title:</Col>
            <Col xs="2">Category</Col>
            <Col xs="2">Importance</Col>
            <Col xs="2">Status</Col>
          </Row>

          {todos}
        </Container>
        {/* <TodoAdd history={history} /> */}
      </div>
    );
  }
}

export default Todos;
