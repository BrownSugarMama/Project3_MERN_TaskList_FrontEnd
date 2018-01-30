import React, {Component} from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class Delete extends Component {
  /* e.preventDefault()
  axios
    .delete(
      //add link here
    )
    .then(( => {
      this.props.history.push()
    })

  } */
  render () {
    return (

      <div>
        <button type='button' class='deleteButton'>deleteButton'>Delete</button>
      </div>
    )
  }
}

export default Delete
