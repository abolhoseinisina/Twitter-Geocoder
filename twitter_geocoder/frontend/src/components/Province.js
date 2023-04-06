import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import TweetList from "./TweetList";
import NewTweetModal from "./NewTweetModal";
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
        alert(this.props.location.state.province)
        this.getTweets();
    };

    getTweets = () => {
        axios.get(API_URL + this.props.location.state.province).then(res => this.setState({ tweets: res.data }));
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