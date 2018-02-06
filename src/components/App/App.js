import React, { Component } from "react";

import Category from "../Category/Category.js";
import About from "../About/About.js";
import Todos from "../Todos/Todos.js";
import TodoEdit from "../TodoEdit/TodoEdit.js";
import "./App.css";

import { Route, Link, Switch, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <h1>Inspired Tasks</h1>
          <Link to="/todo">Tasks</Link>
          <Link to="/category">Category</Link>
          <Link to="/about">About</Link>
        </nav>
        <main>
          <Switch>
            <Route exact path="/todo" render={props => <Todos {...props} />} />
            {<Route path="/todo/:_id" component={TodoEdit} />}
            <Route path="/category" render={() => <Category />} />
            <Route path="/about" render={() => <About />} />
            <Route path="/*" render={() => <Redirect to="/todo" />} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
