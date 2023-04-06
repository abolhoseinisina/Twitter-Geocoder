import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    tweets: []
  };

  componentDidMount() {
    this.resetState();
  }

  resetState = () => {
    this.getTweets();
  };

  getTweets = () => {
    axios.get(API_URL).then(res => this.setState({ tweets: res.data }));
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row className="justify-content-md-center">
          <Col md lg={9}>
            <h1>About us:</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;