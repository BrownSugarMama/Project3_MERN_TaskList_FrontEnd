import React, { Component } from 'react'
import './TodoAdd.css'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap'

class TodoAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      desc: '',
      imp: '',
      cat: '',
      dueDate: '',
      status: '',
      collapse: false
    }

    this.onAddTodoSubmit = this.onAddTodoSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // sourced from https://reactjs.org/docs/forms.html#handling-multiple-inputs
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  componentDidUpdate() {
    this.newTodo = {
      title: this.state.title,
      desc: this.state.desc,
      imp: this.state.imp,
      cat: this.state.desc,
      dueDate: this.state.dueDate,
      status: this.state.status
    }
    // console.log("STATE.TITLE:" + this.state.title);
    console.log('newTodo: ' + newTodo)
  }

  onAddTodoSubmit (e) {
    e.preventDefault()
    console.log('NEWTODO: ' + this.newTodo)
    axios.post('http://localhost:3001/todo', this.newTodo).then(data => {
      console.log(data)
      this.props.history.push('/todo')
    })
  }

  render() {
    return (
      <div className="form" id="todo-add-body">
        <hr />
        <Collapse isOpen={this.state.collapse}>
          <Form onSubmit={this.onAddTodoSubmit}>
          <FormGroup>
            <Label for="titleInput">Title:</Label>
            <Input
              type="text"
              name="title"
              id="titleInput"
              onChange={this.handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="descInput">Description:</Label>
            <Input
              type="textarea"
              name="desc"
              id="descInput"
              onChange={this.handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="impSelect">Importance:</Label>
            <Input
              type="select"
              name="imp"
              id="impSelect"
              onChange={this.handleInputChange}
            >
              <option>Select Importance</option>
              <option>Very Low</option>
              <option>Low</option>
              <option>Moderate</option>
              <option>High</option>
              <option>Very High</option>
              <option>Critical</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="catSelect">Category:</Label>
            <Input
              type="select"
              name="cat"
              id="catSelect"
              onChange={this.handleInputChange}
            >
              <option>Select Category</option>
              <option>Health </option>
              <option>Personal </option>
              <option>School</option>
              <option>Work</option>
            </Input>
          </FormGroup>

          <FormGroup>
            <Label for="dueDateInput">Due Date:</Label>
            <Input
              type="date"
              name="dueDate"
              id="dueDateInput"
              onChange={this.handleInputChange}
            />
          </FormGroup>

          <FormGroup>
            <Label for="statusSelect">Status:</Label>
            <Input
              type="select"
              name="status"
              id="statusSelect"
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

          <input type="submit" value="Add Todo" />
        </Form>
        </Collapse>
      </div>
    );
  }
}

export default TodoAdd;
