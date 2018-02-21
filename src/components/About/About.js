import React, { Component } from "react";
import "./About.css";
import { Container, Row, Col } from "reactstrap";

class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <div id="parent">
            <div id="child">
              <h6>
                This app helps users organize and track tasks. The app allows
                users to classify tasks, track task status, designate task
                importance, sort tasks, and summarize task accomplishments. The
                app also provides inspirational quotes that are designed to
                motivate task completion.
              </h6>
              <br />
              <h6>
                The app pulls inspirational quotes (formatted as JSON from the
                API at favqs.com.{" "}
              </h6>
              <br />
              <h6>
                {" "}
                This app is implemented with Mongo-Express-React-Node (MERN)
                technologies.
              </h6>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default About;
