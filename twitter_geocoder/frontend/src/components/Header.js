import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div className="text-left">
        <img
          src="https://pbs.twimg.com/profile_images/1419653728571953153/53Ohu0OO_400x400.png"
          width="50"
          style={{ marginTop: "20px" }}
          alt="logo"
        /><span>
          Twitter Geocoder
        </span>
      </div>
    );
  }
}

export default Header;