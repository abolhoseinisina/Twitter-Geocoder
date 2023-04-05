import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import moment from 'moment'

import axios from "axios";

import { API_URL } from "../constants";

class NewTweetForm extends React.Component {
  state = {
    pk: 0,
    tweetID: "",
    tweet: "",
    publishDateTime: null,
    lastUpdateDateTime: null,
    mainHighway: "",
    geoname: "",
  };

  componentDidMount() {
    if (this.props.tweet) {
      const { pk, tweetID, tweet, publishDateTime, lastUpdateDateTime, mainHighway, geoname } = this.props.tweet;
      this.setState({ pk, tweetID, tweet, publishDateTime, lastUpdateDateTime, mainHighway, geoname });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createTweet= e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editTweet = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.tweet ? this.editTweet : this.createTweet}>
        <FormGroup>
          <Label for="tweetID">TweetID:</Label>
          <Input
            type="number"
            name="tweetID"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.tweetID)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="tweet">Tweet:</Label>
          <Input
            type="text"
            name="tweet"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.tweet)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="publishDateTime">Publish DateTime:</Label>
          <Input
            type="datetime-local"
            name="publishDateTime"
            onChange={this.onChange}
            value={this.defaultIfEmpty(moment(this.state.publishDateTime).format('YYYY-MM-DDTHH:mm'))}
          />
        </FormGroup>
        <FormGroup>
          <Label for="lastUpdateDateTime">Last Update DateTime:</Label>
          <Input
            type="datetime-local"
            name="lastUpdateDateTime"
            onChange={this.onChange}
            value={this.defaultIfEmpty(moment(this.state.lastUpdateDateTime).format('YYYY-MM-DDTHH:mm'))}
          />
        </FormGroup>
        <FormGroup>
          <Label for="mainHighway">Main Highway:</Label>
          <Input
            type="text"
            name="mainHighway"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.mainHighway)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="geoname">Geo-name:</Label>
          <Input
            type="text"
            name="geoname"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.geoname)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewTweetForm;