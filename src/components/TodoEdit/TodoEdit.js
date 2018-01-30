import React, { Component } from 'react'
import './TodoEdit.css'

class TodoEdit extends Component {
  constructor (props) {
    super(props)
    this.state = {
      TodoEditDetail: {},
      targetTodoEdit: this.props.match.params.tTitle
    }
    this.TodoEdit = this.TodoEdit.bind(this)
  }
// fectching data from backend to update
  componentDidMount () {
    axios
      .get(
        // actual backend url or back end api url address
        'http://localhost:3001/todo' +
          this.state.targetTodoEdit
      )
      .then(response => {
        this.setState({
          TodoEdit: response.data
        })
      })
  }

  TodoEdit (e) {
    e.preventDefault()
    axios
      .put(
         // actual backend url or back end api url address
        'url' +
          this.state.targetTodoEdit
      )

      .then(() => {
        // =============
        this.props.history.push('/todos')
      })
  }

  render () {
    return (
      <div id='todo-detail-body'>
        <h3>
          <span id='todo-title'>Todo Details</span>
        </h3>
        <div id='todo-detail'>

          <p>
            <span id='label'>Todo Title:</span>{' '} {this.state.todoDetail.tTitle}
          </p>
          <p>
            <span id='label'>Todo Desc:</span> {this.state.todoDetail.tDesc}
          </p>

          <p>
            <span id='label'> Todo Impoertance :</span> {this.state.todoDetail.tImp}
          </p>
          <p>
            <span id='label'> Todo Catagory:</span> {this.state.todoDetail.tCat}
          </p>
          <p>
            <span id='label'> Todo Status:</span> {this.state.todoDetail.tStat}
          </p>

          <form onSubmit={this.todoPut}>
            <input id='todo-form' type='submit' value='Put todo' />
          </form>
        </div>
      </div>
    )
  }
}

export default TodoEdit

// =============================================
// up on submitting the ToodEdit  this function is excuted at the back end .
// ==============================================

// function todoPut (request, response) {
//   Todo.findOneAndUpdate({ _id: request.params.id }, request.body, {
//     new: true
//   })
//     .then(todo => {
//       response.status(200).json(todo)
//     })
//     .catch(err => {
//       response.status(500).send({ error: 'Nope!' })
//     })
// }
