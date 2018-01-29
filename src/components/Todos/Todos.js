import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import { Container, Row, Col  } from 'reactstrap'

class Todos extends Component
    render () {
        let todo = this.props.todo.find(
            todo => (todo.list = this.props.match.params.list)
        )
        return (
            <Container>
                  <Row>
                    <Col xs="auto"> { todo.title }  </Col>
                    <Col xs="3"> { todo.category }  </Col>
                    <Col xs="3"> { todo.importance } </Col>
                  </Row>
            </Container>
        )
    }


    export default Todos
