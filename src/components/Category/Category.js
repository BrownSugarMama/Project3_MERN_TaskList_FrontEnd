import React, { Component } from "react";
import "./Category.css";
import { Container, Row, Col } from "reactstrap";

class Category extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row />
          <Row>
            <Col xs="2" />
            <Col xs="8">
              Not part of MPV. This component will be used to manage list of
              values used to categorize tasks.
            </Col>
            <Col xs="2" />
          </Row>
          <Row />
        </Container>
      </div>
    );
  }
}

export default Category;
