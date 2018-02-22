import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Container className="bg-primary dash mr-auto">
          <Row>
            <Col xs="3">total: {this.props.allCnt}</Col>
            <Col xs="3">important: {this.props.highCnt}</Col>
            <Col xs="3">in-process: {this.props.ipCnt}</Col>
            <Col xs="3">complete: {this.props.compCnt}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
