import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs="3">TOTAL: {this.props.allCnt}</Col>
            <Col xs="3">HIGH IMP:{this.props.highCnt}</Col>
            <Col xs="3">IN-PROCESS: {this.props.ipCnt}</Col>
            <Col xs="3">COMPLETE: {this.props.compCnt}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Dashboard;
