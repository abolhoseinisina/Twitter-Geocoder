import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row className="justify-content-md-center">
          <Col>
            <h3>This is the homepage of the website!</h3>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;