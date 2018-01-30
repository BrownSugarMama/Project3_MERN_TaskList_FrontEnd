import React, { Component } from 'react'
import axios from "axios"
import "./Todos.css"
import { Link, Route } from 'react-router-dom'
import TodoAdd from "./TodoAdd/TodoAdd.js"
import Url from from "./Components/url.js"

import { Container, Row, Col  } from 'reactstrap'

    // Todo Component
class Todos extends Component {
    constructor(props) {
        super(props);
        this.state = {
          todos: []
        };
      }

      componentDidMount() {
        axios
          .get ${ url }
          .then(response => {
            this.setState({
              todos: response.data
            });
          });
      }
    
        render() {
            let { history } = this.props;
            let todos = this.state.todos.map((todo, index) => {
              return (
                <div id="todos-body" key={index}>
                  <p>
                  <Container>
                    <Row>
                        <Col xs="auto">
                            <Link to={`${this.props.match.url}/${todo.titles}`}
                            onClick={this.props.setTodo}
                            <span id="todos-title">{todo.title}</span>{" "}
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
                  </p>
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


    export default Todos


