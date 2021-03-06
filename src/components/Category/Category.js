import React, { Component } from "react";
import "./Category.css";
import axios from "axios";
// import { withRouter } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, Collapse } from "reactstrap";
import BENDURL from "../../constants.js";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      collapse: true
    };

    // this.onAddTodoSubmit = this.onAddTodoSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  // componentDidUpdate () {
  //   this.newTodo = {
  //     title: this.state.title,
  //     desc: this.state.desc,
  //     imp: this.state.imp,
  //     cat: this.state.desc,
  //     dueDate: this.state.dueDate,
  //     status: this.state.status
  //   }
  //   // console.log("STATE.TITLE:" + this.state.title);
  //   console.log('newTodo: ' + this.newTodo)
  // }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  // onAddTodoSubmit (e) {
  //   e.preventDefault()
  //   console.log('NEWTODO: ' + this.newTodo)
  //   axios.post('http://localhost:3001/todo', this.newTodo).then(data => {
  //     console.log(data)
  //     this.props.history.push('/todo')
  //   })
  // }

  render() {
    return (
      <div className="form" id="todo-add-body">
        <hr />

        <Collapse isOpen={this.state.collapse}>
          <Form id="formlist" onSubmit={this.onAddTodoSubmit}>
            <input id="todo-add-body" type="submit" value="ADD CATEGORY" />
            <FormGroup>
              <Label for="titleInput" />
              <Input
                type="text"
                name="title"
                id="titleInput"
                onChange={this.handleInputChange}
              />
            </FormGroup>
          </Form>
        </Collapse>
      </div>
    );
  }
}

export default Category;
