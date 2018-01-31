import React, { Component } from 'react'

import Category from '../Category/Category.js'
import About from '../About/About.js'
import Todos from '../Todos/Todos.js'
// import TodoEdit from '../TodoEdit/TodoEdit.js';
import './App.css'

import { Route, Link, Redirect, Switch } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <div>
        <nav>
          <h1>TO-DO-DOs</h1>
          <Link to='/todo'>TASKS</Link>
          <Link to='/category'>CATEGORY</Link>
          <Link to='/about'>ABOUT</Link>
        </nav>
        <main>
          <Switch>
            <Route path='/category' render={() => <Category />} />
            <Route path='/about' render={() => <About />} />
            <Route exact path='/todo' render={props => <Todos {...props} />} />
            {/* <Route path='/todo/:_id' component={TodoEdit} /> */}
            {/* <Route path="/*" render={() => <Redirect to="/todo" />} /> */}
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
