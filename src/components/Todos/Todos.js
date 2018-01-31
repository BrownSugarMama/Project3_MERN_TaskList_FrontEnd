import React, { Component } from 'react'
import grommet from 'grommet'
import axios from 'axios'
import './Todos.css'
// import { Link, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import TodoAdd from '../TodoAdd/TodoAdd.js'
// import Url from from "../Url.js"

import { Container, Row, Col } from 'reactstrap'

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
                onClick={this.props.setTodo}
              >
                <span id='todo-title'>{todo.title}</span>
              </Link>
            </Columns>
            <Columns responsive={false}>{todo.cat}</Columns>
            <Columns responsive={false}>{todo.imp}</Columns>
            <Columns responsive={false}>{todo.status}</Columns>
        
        </div>
      )
    })

    return ( 
      
          <Columns responsive={false} 
             size='large'>
              <Box align='start'
                pad='medium'
                margin='small'
                colorIndex='light-2'>
            Title
              </Box>
          

          <Columns responsive={false}
            size='small'>
          <Box align='center'
                pad='medium'
                margin='small'
                colorIndex='light-2'>
            Category
          </Box>

          <Columns responsive={false}
            size='small'>
          <Box align='center'
                pad='medium'
                margin='small'
                colorIndex='light-2'>
            Importance
          </Box>
          <Columns responsive={false}
            size='small'>
          <Box align='center'
                pad='medium'
                margin='small'
                colorIndex='light-2'>
            Categories
          </Box>
          </Columns>
          {todos}
        
        
        <TodoAdd history={history} />
      
    
    )
  }
}

export default Todos

