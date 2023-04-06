import React, { Component } from "react";
import { Table, Button } from "reactstrap";

class TweetList extends Component {
  render() {
    const tweets = this.props.tweets;
    return (
      <div class="table-responsive">
      <Table className={'table-hover table-sm'}>
        <thead>
          <tr>
            <th>ID</th>
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
                <td>{tweet.pk}</td>
                <td>{tweet.tweet}</td>
                <td>{tweet.publishDateTime}</td>
                <td>{tweet.lastUpdateDateTime}</td>
                <td>{tweet.mainHighway}</td>
                <td>{tweet.geoname}</td>
                <td align="center">
                  <Button>Locate</Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
      </div>
    );
  }
}

export default TweetList;