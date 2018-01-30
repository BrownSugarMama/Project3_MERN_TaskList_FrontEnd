import React, { Component } from "react";

import Category from "../Category/Category.js";
import About from "../About/About.js";
// import Todos from "../Todos/Todos.js";
import TodoEdit from "../TodoEdit/TodoEdit.js";
import "./App.css";

import { Route, Link, Redirect, Switch } from "react-router-dom";

class App extends Component {
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
            {/* <Route exact path="/todo" render={props => <Todos {...props} />} /> */}
            <Route path="/todo/:_id" component={TodoEdit} />
            {/* <Route path="/*" render={() => <Redirect to="/todo" />} /> */}
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
