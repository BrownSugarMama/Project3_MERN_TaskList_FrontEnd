import React, {Component} from 'react'
import { Route, Link, Redirect, Switch } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

class Delete extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delete: []
    }
  }

  componentDidMount() {
    axios
      .get ${ url }
      .then(response => {
        this.setState({
          delete: response.data
        });
      });
  }
  


  render () {
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
