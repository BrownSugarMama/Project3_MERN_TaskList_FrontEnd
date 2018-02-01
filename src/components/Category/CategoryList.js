import React, { Component } from 'react'
import axios from 'axios'
class CategoryList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      cats: []
    }
  }

  componentDidMount () {
    axios.get('http://localhost:3001/cat').then(response => {
      this.setState({ cats: response.data })
    })
  }

  render () {
    return (
      <div>
        <h1> Category list</h1>
      </div>
    )
  }
}
export default CategoryList
