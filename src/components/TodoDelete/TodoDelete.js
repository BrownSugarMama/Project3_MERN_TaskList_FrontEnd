import React, {Component} from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class Delete extends Component {
  constructor(props) {
    super(props)
    this.state = {
      delete: []
      
    }
  }
  /*
  class TodoEdit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      TodoEditDetail: {},
      targetTodoEdit: this.props.match.params.tTitle
    }
    this.TodoEdit = this.TodoEdit.bind(this)
  }

  */


  componentDidMount() {
    axios
      .get ${ url }
      .then(response => {
        this.setState({
          delete: response.data
        })
      })
  }

  render () {
    return (

  render () {}
    return (
      <div>
        <button type='button' className='deleteButton'>
        <Link to='Todos.js'>Delete</Link>
        </button>
      </div>
    )
  }
}

export default Delete

/*
constructor(props) {
    super(props);
    this.state = {
      bucketDetail: {},
      targetBucket: this.props.match.params.bTitle
    };
    this.bucketDelete = this.bucketDelete.bind(this);
  }

  componentDidMount() {
    axios
      .get(
        "https://can-do-kanban-bend.herokuapp.com/bucket/" +
          this.state.targetBucket
      )
      .then(response => {
        this.setState({
          bucketDetail: response.data
        });
      });
  }


*/
