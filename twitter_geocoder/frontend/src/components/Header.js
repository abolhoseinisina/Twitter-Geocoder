import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-center">
        <img
          src="https://pbs.twimg.com/profile_images/1419653728571953153/53Ohu0OO_400x400.png"
          width="300"
          className="img-thumbnail"
          style={{ marginTop: "20px" }}
          alt="logo"
        />
        <hr />
        <h1>Twitter Geocoder</h1>
      </div>
    );
  }
}

export default Header;