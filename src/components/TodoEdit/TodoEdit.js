import React, { Component } from "react";
import "./TodoEdit.css";
import axios from "axios";
import { Link } from "react-router-dom";
import {
  Form,
  FormGroup,
  Row,
  Col,
  Container,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  Label,
  Input
} from "reactstrap";
import BENDURL from "../../constants.js";

class TodoEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      desc: "",
      imp: "",
      cat: "",
      dueDate: "",
      status: "",
      targetTodo: this.props.match.params._id,
      cats: [],
      quoteObj: {},
      quote: ""
    };

    this.onEditTodoSubmit = this.onEditTodoSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.todoDelete = this.todoDelete.bind(this);
    this.getQuote = this.getQuote.bind(this);
  }

  componentDidMount() {
    axios.get(BENDURL + "/todo/" + this.state.targetTodo).then(response => {
      this.setState({
        title: response.data.title,
        desc: response.data.desc,
        imp: response.data.imp,
        cat: response.data.cat,
        status: response.data.status,
        dueDate: response.data.dueDate,
        quote: response.data.quote
      });
    });

    axios
      .get("https://favqs.com/api/quotes/?filter=motivat", {
        headers: {
          Authorization: `Token token="0fc8db57aadb0bd4880fe990bd74e1f0"`
        }
      })
      .then(response => {
        this.setState({ quoteObj: response.data });
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

    axios.get(BENDURL + "/cat").then(response => {
      this.setState({ cats: response.data });
    });
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
    this.editTodo = {
      title: this.state.title,
      desc: this.state.desc,
      imp: this.state.imp,
      cat: this.state.cat,
      dueDate: this.state.dueDate,
      status: this.state.status,
      quote: this.state.quote
    };
  }

  onEditTodoSubmit(e) {
    e.preventDefault();
    console.log("editTodo: " + this.editTodo);
    axios
      .put(BENDURL + "/todo/" + this.state.targetTodo, this.editTodo)
      .then(data => {
        console.log(data);
        this.props.history.push("/todo");
      });
  }

  todoDelete(e) {
    e.preventDefault();
    axios.delete(BENDURL + "/todo/" + this.state.targetTodo).then(() => {
      this.props.history.push("/todo");
    });
  }

  getQuote() {
    let indx = Math.floor(Math.random() * 25);
    this.setState({
      quote:
        this.state.quoteObj.quotes[indx].body +
        " -- " +
        this.state.quoteObj.quotes[indx].author
    });
  }

  render() {
    let cats = this.state.cats.map((cat, index) => {
      return <option>{cat.catTitle}</option>;
    });
    return (
      <div className="edit-custom">
        <Container>
          <hr />
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/todos" className="text-info">
                buckets
              </Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{this.state.title}</BreadcrumbItem>
          </Breadcrumb>
          <hr />
        </Container>
        <div className="form">
          <Container>
            <Form onSubmit={this.onEditTodoSubmit}>
              <Row>
                <Col xs="10">
                  <FormGroup className="input-group">
                    <Input
                      type="textarea"
                      name="quote"
                      rows="3"
                      value={this.state.quote}
                      id="quoteInput"
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col xs="2">
                  <Button className="form-btn " onClick={this.getQuote}>
                    get inspired
                  </Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Label for="titleInput">Title:</Label>
                    <Input
                      type="text"
                      value={
                        this.state.title // defaultValue={this.state.todoFormData.title}
                      }
                      name="title"
                      id="titleInput"
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for="descInput">Description:</Label>
                    <Input
                      type="textarea"
                      value={this.state.desc}
                      name="desc"
                      id="descInput"
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="6">
                  <FormGroup>
                    <Label for="impSelect">Importance:</Label>
                    <Input
                      type="select"
                      value={this.state.imp}
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
                </Col>
                <Col xs="6">
                  <FormGroup>
                    <Label for="catSelect">Category:</Label>
                    <Input
                      type="select"
                      value={this.state.cat}
                      name="cat"
                      id="catSelect"
                      onChange={this.handleInputChange}
                    >
                      <option>Select Category...</option>
                      {cats}
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <Row>
                <Col xs="6">
                  <FormGroup>
                    <Label for="dueDateInput">Due Date:</Label>
                    <Input
                      type="date"
                      value={this.state.dueDate}
                      name="dueDate"
                      id="dueDateInput"
                      onChange={this.handleInputChange}
                    />
                  </FormGroup>
                </Col>
                <Col xs="6">
                  <FormGroup>
                    <Label for="statusSelect">Status:</Label>
                    <Input
                      type="select"
                      value={this.state.status}
                      name="status"
                      id="statusSelect"
                      onChange={this.handleInputChange}
                    >
                      <option>Select Status...</option>
                      <option>Backlog</option>
                      <option>Planned </option>
                      <option>In-Process</option>
                      <option>Complete</option>
                      <option>Archive</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <button className="btn btn-secondary" type="submit">
                update
              </button>
              {"  "}
              <button className="btn btn-secondary" onClick={this.todoDelete}>
                delete
              </button>
            </Form>
          </Container>
        </div>
      </div>
    );
  }
}

export default TodoEdit;
