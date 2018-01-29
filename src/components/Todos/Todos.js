import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom

class Todo extends Component
    render () {
        let todo = this.props.todo.find(
            todo => (todo.symbol = this.props.match.params.symbol)
        )
        return (
            <div> 
                <h2> TASK LIST
                </h2>
            </div>
        )
    }


    export default Todo
