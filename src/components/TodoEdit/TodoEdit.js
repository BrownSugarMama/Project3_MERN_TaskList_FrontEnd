import React, { Component } from 'react'
import './TodoEdit.css'
import axios from 'axios'
// import { withRouter } from 'react-router-dom'
import { Form, FormGroup, Button, Label, Input } from 'reactstrap'

class TodoEdit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      desc: '',
      imp: '',
      cat: '',
      dueDate: '',
      status: '',
     // todoFormData: {},
      targetTodo: this.props.match.params._id
    }

    this.onEditTodoSubmit = this.onEditTodoSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.todoDelete = this.todoDelete.bind(this)
  }

  componentDidMount () {
    axios
      .get('http://localhost:3001/todo/' + this.state.targetTodo)
      .then(response => {
        this.setState({
          title: response.data.title,
          desc: response.data.desc,
          imp: response.data.imp,
          cat: response.data.cat,
          dueDate: response.data.dueDate
        })
      })
  }

  // sourced from https://reactjs.org/docs/forms.html#handling-multiple-inputs
  handleInputChange (event) {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  componentDidUpdate () {
    this.editTodo = {
      title: this.state.title,
      desc: this.state.desc,
      imp: this.state.imp,
      cat: this.state.cat,
      dueDate: this.state.dueDate,
      status: this.state.status
    }
    // console.log('xdsd' + this.props.match.params._id)
   // console.log('test ...' + this.state.todoFormData.title)
  }

  onEditTodoSubmit (e) {
    e.preventDefault()
    console.log('editTodo: ' + this.editTodo)
    axios
      .put('http://localhost:3001/todo/' + this.state.targetTodo, this.editTodo)
      .then(data => {
        console.log(data)
        this.props.history.push('/todo')
      })
  }

  // the delete
  todoDelete (e) {
    e.preventDefault()
    axios
      .delete('http://localhost:3001/todo/' + this.state.targetTodo)
      .then(() => {
        this.props.history.push('/todo')
      })
  }

  render () {
    return (
      <div className='form' id='todo-add-body'>
        <Form onSubmit={this.onEditTodoSubmit}>
          <FormGroup>
            <Label for='titleInput'>Title:</Label>
            <Input
              type='text'
              value={
                this.state.title // defaultValue={this.state.todoFormData.title}
              }
              name='title'
              id='titleInput'
              onChange={this.handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for='descInput'>Description:</Label>
            <Input
              type='textarea'
              value={this.state.desc}
              name='desc'
              id='descInput'
              onChange={this.handleInputChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for='impSelect'>Importance:</Label>
            <Input
              type='select'
              value={this.state.imp}
              name='imp'
              id='impSelect'
              onChange={this.handleInputChange}
            >
              <option>Select Importance...</option>
              <option>Low</option>
              <option>Moderate</option>
              <option>High</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for='catSelect'>Category:</Label>
            <Input
              type='select'
              value={this.state.cat}
              name='cat'
              id='catSelect'
              onChange={this.handleInputChange}
            >
              <option>Select Category...</option>
              <option>Work </option>
              <option>Learning </option>
              <option>Health</option>
              <option>School</option>
              <option>Personal</option>
              <option>Family</option>

            </Input>
          </FormGroup>

          <FormGroup>
            <Label for='dueDateInput'>Due Date:</Label>
            <Input
              type='date'
              value={this.state.dueDate}
              name='dueDate'
              id='dueDateInput'
              onChange={this.handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for='statusSelect'>Status:</Label>
            <Input
              type='select'
              value={this.state.status}
              name='status'
              id='statusSelect'
              onChange={this.handleInputChange}
            >
              <option>Select Status</option>
              <option>Backlog</option>
              <option>Planned </option>
              <option>In-Process</option>
              <option>Complete</option>
              <option>Archive</option>
            </Input>
          </FormGroup>

          <Button className='form-btn' type='submit'>
            EDIT
          </Button>
        </Form>
        <br />
        <Form onSubmit={this.todoDelete}>
          <Button className='form-btn' type='submit'>
            DELETE
          </Button>
        </Form>
      </div>
    )
  }
}

export default TodoEdit
