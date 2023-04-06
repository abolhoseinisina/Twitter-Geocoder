import React, { Component } from "react";
import { Col, Container, Row, Button } from "reactstrap";
import TweetList from "./TweetList";
import MapView from "./MapView";
import { useLocation } from 'react-router-dom';

import axios from "axios";

import { API_URL } from "../constants";

class Province extends Component {
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
        axios.get(API_URL + this.props.location.state.province).then(res => this.setState({ tweets: res.data }));
    };

    render() {
        return (
            <Container style={{ marginTop: "20px" }}>
                <Row>
                    <Col><h3>Provinces: {this.props.location.state.province}</h3></Col>
                </Row>
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
                                <Button onClick={() => this.getTweets()}>Referesh</Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col md lg={3}>
                        <MapView />
                    </Col>
                </Row>
            </Container>
        );
    }
}

function ProvinceWithNavigate(props) {
    let location = useLocation();
    return <Province {...props} location={location} />
}

export default ProvinceWithNavigate;