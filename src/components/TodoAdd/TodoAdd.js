import React, { Component } from 'react'
import './TodoAdd.css'
import axios from 'axios'
// import { withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Collapse } from 'reactstrap'
// import Categories from 'cat'

class TodoAdd extends Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      desc: '',
      imp: '',
      cat: '',
      dueDate: '',
      status: '',
      collapse: false
    }

    // Cat selector prop for updates
    // class Cat extends Component {
    //   constructor(props) {
    //     super(props)
    //     this.state = {
    //       cat: ''
    //     }
    //   }
    // }

    this.onAddTodoSubmit = this.onAddTodoSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
    this.toggle = this.toggle.bind(this)
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
    this.newTodo = {
      title: this.state.title,
      desc: this.state.desc,
      imp: this.state.imp,
      cat: this.state.cat,
      dueDate: this.state.dueDate,
      status: this.state.status
    }
    // console.log("STATE.TITLE:" + this.state.title);
    console.log('newTodo: ' + this.newTodo)
  }

  componentDidMount () {
    axios
      .get('http://localhost:3001/todo/' + this.state.targetTodo)
      .then(response => {
        this.setState({
      // array that loops through the cats
        })
      })
// state.title);
    console.log('newCat: ' + this.newCat)
  }

  toggle () {
    this.setState({ collapse: !this.state.collapse })
  }

  onAddTodoSubmit (e) {
    // e.preventDefault();
    console.log('NEWTODO: ' + this.newTodo)
    axios.post('http://localhost:3001/todo', this.newTodo).then(data => {
      console.log(data)
      this.props.history.push('/todo')
    })
  }

  render () {
    return (
      <div className='form' id='todo-add-body'>
        <hr />
        <button id='form-btn' onClick={this.toggle}>
          ADD TASK
        </button>
        <Collapse isOpen={this.state.collapse}>
          <Form id='formlist' onSubmit={this.onAddTodoSubmit}>
            <FormGroup>
              <Label for='titleInput'>Title:</Label>
              <Input
                type='text'
                name='title'
                id='titleInput'
                onChange={this.handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for='descInput'>Description:</Label>
              <Input
                type='textarea'
                name='desc'
                id='descInput'
                onChange={this.handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for='impSelect'>Importance:</Label>
              <Input
                type='select'
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
                name='cat'
                id='catSelect'
                onChange={this.handleInputChange}
              >
              {/* loop through array in state with all options */}
                <option>Select Category...</option>
                 <option>
               function cat
            
                  </option>
                {/* Previous selector options (hardcodde) */}
                {/* <option>Work </option>
                <option>Learning </option>
                <option>Health</option>
                <option>School</option>
                <option>Personal</option>
                <option>Family</option> */}
              </Input>
            </FormGroup>

            <FormGroup>
              <Label for='dueDateInput'>Due Date:</Label>
              <Input
                type='date'
                name='dueDate'
                id='dueDateInput'
                onChange={this.handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <Label for='statusSelect'>Status:</Label>
              <Input
                type='select'
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

            <button id='form-btn' type='submit'>
              SUBMIT
            </button>
          </Form>
        </Collapse>
      </div>
    )
  }
}

export default TodoAdd
