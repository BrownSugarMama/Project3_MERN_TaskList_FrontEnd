import React, {Component} from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
<<<<<<< HEAD
=======

class Delete extends Component {
<<<<<<< HEAD
  constructor(props) {
    super(props);
    this.state = {
      Delete: {},
      targetDelete: this.props.match.params
    };
    this.Delete = this.Delete.bind(this);
    }

  } 

  componentDidMount() {
    axios
      .get(
        "link goes here"
          this.state.targetDelete
      )
      .then (responce =>{
        this.setState({
          
        })
      })
  }

  // Fix this merge conflict!!
=======
>>>>>>> neechie
  render () {
    return (
      <div>
<<<<<<< HEAD
        <button type='button' class='deleteButton'>Delete</button>
=======
        <button type='button' class='deleteButton'> Delete </button>
>>>>>>> neechie
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
>>>>>>> master
