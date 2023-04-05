import React, { Component } from "react";
import { Table } from "reactstrap";
import NewTweetModal from "./NewTweetModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class TweetList extends Component {
  render() {
    const tweets = this.props.tweets;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>TweetID</th>
            <th>Tweet</th>
            <th>Publish DateTime</th>
            <th>Last Update DateTime</th>
            <th>Main Highway</th>
            <th>Geo-name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!tweets || tweets.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
            tweets.map(tweet => (
              <tr key={tweet.pk}>
                <td>{tweet.tweetID}</td>
                <td>{tweet.tweet}</td>
                <td>{tweet.publishDateTime}</td>
                <td>{tweet.lastUpdateDateTime}</td>
                <td>{tweet.mainHighway}</td>
                <td>{tweet.geoname}</td>
                <td align="center">
                  <NewTweetModal
                    create={false}
                    tweet={tweet}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={tweet.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default TweetList;