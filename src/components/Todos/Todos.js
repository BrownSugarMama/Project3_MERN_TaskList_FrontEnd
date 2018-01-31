import React, { Component } from 'react'
import grommet from 'grommet'
import axios from 'axios'
import './Todos.css'
// import { Link, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import TodoAdd from '../TodoAdd/TodoAdd.js'
// import Url from from "../Url.js"

<<<<<<< HEAD
import { Container, Row, Col } from 'reactstrap'
=======
import { Container, Row, Col } from "reactstrap";
// import { SortableContainer, SortableElement, arrayMove } form 'react-sortable-hoc'
>>>>>>> master

// Todo Component
class Todos extends Component {
  constructor (props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:3001/todo').then(response => {
      this.setState({ todos: response.data })
    })
  }

  render () {
    let { history } = this.props
    let todos = this.state.todos.map((todo, index) => {
      return (
        <div id='todos-body' key={index}>
        
            <Columns responsive={false}
              <Link
                to={`${this.props.match.url}/${todo._id}`}
                // onClick={this.props.setTodo}
              >
                <span id='todo-title'>{todo.title}</span>
              </Link>
<<<<<<< HEAD
            </Columns>
            <Columns responsive={false}>{todo.cat}</Columns>
            <Columns responsive={false}>{todo.imp}</Columns>
            <Columns responsive={false}>{todo.status}</Columns>
        
=======
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
>>>>>>> master
        </div>
      )
    })

<<<<<<< HEAD
    return ( 
      
          <Columns responsive={false} 
             size='large'>
              <Box align='start'
                pad='medium'
                margin='small'
                colorIndex='light-2'>
            Title
              </Box>
          </Columns>
          
=======
    return (
      <div>
        <Container>
          <Row id="todos-table-header">
            <Col xs="6">TITLE</Col>
            <Col xs="2">CATEGORY</Col>
            <Col xs="2">IMPORTANCE</Col>
            <Col xs="2">STATUS</Col>
          </Row>
>>>>>>> master

          <Columns responsive={false}
            size='small'>
          <Box align='center'
                pad='medium'
                margin='small'
                colorIndex='light-2'>
            Category
          </Box>
          </Columns>

          <Columns responsive={false}
            size='small'>
          <Box align='center'
                pad='medium'
                margin='small'
                colorIndex='light-2'>
            Importance
          </Box>
          </Columns>

          <Columns responsive={false}
            size='small'>
          <Box align='center'
                pad='medium'
                margin='small'
                colorIndex='light-2'>
            Categories
          </Box>
          </Columns>
      
    
    )
  }
}

export default Todos
/*

possible way to sort through items....
this.state.data.map((item, i) => <div key={i}> {item.matchID}  
                      {item.timeM} {item.description}</div>)

*/

