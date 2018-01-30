import React, { Component } from 'react'
import axios from 'axios'
import './TodoEdit.css'

import { Container, Row, Col } from 'reactstrap'

// TodoEdit component
class TodoEdit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      TodoEditDetail: {}
      // targetTodoEdit: this.props.match.params.tTitle
    }
    this.TodoEdit = this.TodoEdit.bind(this)
  }
// fectching data from backend to update
  componentDidMount () {
    axios
      .get('http://localhost:3001/todo').then(response => {
        this.setState({TodoEdit: response.data})
      })
  }
/*
  TodoEdit (e) {
    e.preventDefault()
    axios
      .put(
         // actual backend url or back end api url address
        'url' +
          this.state.targetTodoEdit
      )

      .then(() => {
        // =============
        this.props.history.push('/todos')
      })
  }
*/

  render () {
    let { history } = this.props
    let todos = this.state.todos.map((todo, index) => {
      return (
        <div id='todos-body' key={index}>
          <Row>
            <Col xs='6'>
              <Link
                to={`${this.props.match.url}/${todo._id}`}
                onClick={this.props.setTodo}
            >
                <span id='todo-title'>{todo.title}</span>
              </Link>
            </Col>
            <Col xs='2'>{todo.cat}</Col>
            <Col xs='2'>{todo.imp}</Col>
            <Col xs='2'>{todo.status}</Col>
          </Row>
        </div>
      )
    })

    return (
      <div>
        <Container>
          <Row id='todos-table-header'>
            <Col xs='6'>Title:</Col>
            <Col xs='2'>Category</Col>
            <Col xs='2'>Importance</Col>
            <Col xs='2'>Status</Col>
          </Row>

          {todos}
        </Container>
        <TodoAdd history={history} />
      </div>
    )
  }
}

export default TodoEdit
