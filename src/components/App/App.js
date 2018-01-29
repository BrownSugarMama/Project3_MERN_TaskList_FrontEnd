<<<<<<< HEAD
import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
=======
import React, { Component } from "react";

import Category from "../Category/Category.js";
import About from "../About/About.js";
import Todos from "../Todos/Todos.js";
import TodoEdit from "../TodoEdit/TodoEdit.js";
import "./App.css";
>>>>>>> 99256b5a5c30298245ed4fd3630edb4a4ab35f0c

import { Route, Link, Redirect, Switch } from "react-router-dom";

class App extends Component {
<<<<<<< HEAD
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>test</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
=======
  // constructor(props) {
  //   super(props);
  //   initialize state
  //   this.state = {
  //     buckets: []
  //   };
  // }

  render() {
    return (
      <div>
        <nav>
          <h1>To-Do-Dos</h1>
          <Link to="/category">Category</Link>
          <Link to="/about">About</Link>
          <Link to="/todo">To-Do-Dos</Link>
        </nav>
        <main>
          <Switch>
            <Route path="/category" render={() => <Category />} />
            <Route path="/about" render={() => <About />} />
            <Route exact path="/todo" render={props => <Todos {...props} />} />
            <Route path="/todo/:_id" component={TodoEdit} />
            {/* <Route path="/*" render={() => <Redirect to="/todo" />} /> */}
          </Switch>
        </main>
>>>>>>> 99256b5a5c30298245ed4fd3630edb4a4ab35f0c
      </div>
    )
  }
}

export default App
