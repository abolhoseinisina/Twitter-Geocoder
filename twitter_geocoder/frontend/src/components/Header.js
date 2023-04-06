import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ProvincesDropDown from "./ProvincesDropDown";
import { useNavigate } from 'react-router-dom';

class Header extends Component {

  handleClick(url) {
    this.props.navigate(url);
  }

  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6"
            component="div" sx={{ flexGrow: 0.1 }}>
            Canadian Twitter Traffic Reports
          </Typography>
          <Button color="inherit" onClick={() => this.handleClick('/')}>Home</Button>
          <Button color="inherit" onClick={() => this.handleClick('/about')}>About</Button>
          <ProvincesDropDown />
          <Button style={{ marginLeft: "auto" }} color="inherit" onClick={() => this.handleClick('/login')}>Login</Button>
        </Toolbar>
      </AppBar>

    );
  };
}

function HeaderWithNavigate(props) {
  let navigate = useNavigate();
  return <Header {...props} navigate={navigate} />
}

export default HeaderWithNavigate;