import React, { Component } from "react";
import "./About.css";
import { Container, Row, Col } from "reactstrap";

class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row />
          <Row>
            <Col xs="2" />
            <Col xs="8">
              The inspired task app helps users organize and track tasks. The
              app allows users to classify tasks, track task status, designate
              task importance, sort tasks, and summarize task accomplishments.
              The app also provides inspirational quotes that are designed to
              motivate task completion.
            </Col>
            <Col xs="2" />
          </Row>
          <Row />
        </Container>
      </div>
    );
  }
}

export default About;
