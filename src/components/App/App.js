import React, { Component } from "react";

import Category from "../Category/Category.js";
import About from "../About/About.js";
import Todos from "../Todos/Todos.js";
import TodoEdit from "../TodoEdit/TodoEdit.js";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import { Route, Link, Switch, Redirect } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/todo" className="mr-auto">
            inspired tasks
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/category">Category</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>

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
