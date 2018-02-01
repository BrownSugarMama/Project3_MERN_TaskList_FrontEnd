import React, { Component } from "react";
import "./TodoAdd.css";
import axios from "axios";
import { Button, Form, FormGroup, Label, Input, Collapse } from "reactstrap";

class TodoAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      imp: "",
      cat: "",
      dueDate: "",
      status: "",
      quoteArr: {},
      quote: "",
      collapse: false
    };

    this.onAddTodoSubmit = this.onAddTodoSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.getQuote = this.getQuote.bind(this);
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
      cat: this.state.cat,
      dueDate: this.state.dueDate,
      status: this.state.status,
      quote: this.state.quote
    };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  onAddTodoSubmit(e) {
    // e.preventDefault();
    console.log("NEWTODO: " + this.newTodo);
    axios.post("http://localhost:3001/todo", this.newTodo).then(data => {
      console.log(data);
      this.props.history.push("/todo");
    });
  }

  getQuote() {
    let indx = Math.floor(Math.random() * 26);
    let quoteContent =
      this.state.quoteArr[indx].body +
      " -- " +
      this.state.quoteArr[indx].author;
    this.setState({
      quote: quoteContent
    });
  }

  componentDidMount() {
    axios
      .get("https://favqs.com/api/quotes/?filter=motivation&type=tag", {
        headers: {
          Authorization: `Token token="0fc8db57aadb0bd4880fe990bd74e1f0"`
        }
      })
      .then(response => {
        this.setState({
          quoteArr: response.data.quotes
        });
        console.log("QUOTE_ARR:" + response.data);
      })
      .catch(function(error) {
        if (error.response) {
          console.log("Error 1", error.response.data);
          console.log("Error 1", error.response.status);
          console.log("Error 1", error.response.headers);
        } else if (("Error 2", error.request)) {
          console.log("Error 2", error.request);
        } else {
          console.log("Error3", error.message);
        }
        console.log("Error 4", error.config);
      });
  }

  render() {
    return (
      <div className="form" id="todo-add-body">
        <hr />
        <Button className="form-btn" onClick={this.toggle}>
          ADD TASK
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <hr />
          <Form id="formlist" onSubmit={this.onAddTodoSubmit}>
            <FormGroup className="input-group">
              {/* <Label for="quoteInput">Inspiration:</Label> */}
              <Input
                type="textarea"
                name="quote"
                value={this.state.quote}
                id="quoteInput"
                onChange={this.handleInputChange}
              />
              <Button className="form-btn " onClick={this.getQuote}>
                GET INSPIRED
              </Button>
            </FormGroup>

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
                <option>Select Importance...</option>
                <option>Low</option>
                <option>Moderate</option>
                <option>High</option>
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
                <option>Select Category...</option>
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

            <Button className="form-btn" type="submit">
              SUBMIT
            </Button>
          </Form>
        </Collapse>
      </div>
    );
  }
}

export default TodoAdd;
