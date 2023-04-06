import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import TweetList from "./TweetList";
import NewTweetModal from "./NewTweetModal";
import MapView from "./MapView"

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
            <Row>
              <Col>
                <TweetList
                  tweets={this.state.tweets}
                  resetState={this.resetState}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <NewTweetModal create={true} resetState={this.resetState} />
              </Col>
            </Row>
          </Col>
          <Col md lg={3}>
            <MapView/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;