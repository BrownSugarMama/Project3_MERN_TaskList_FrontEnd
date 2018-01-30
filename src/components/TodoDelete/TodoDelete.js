import React, {Component} from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class Delete extends Component {
  render () {
    return (

      <div>
        <button type='button' class='deleteButton'> Delete </button>
      </div>
    )
  }
}

export default Delete
