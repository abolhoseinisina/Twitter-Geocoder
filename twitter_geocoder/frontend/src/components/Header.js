import React, { Component } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from 'react-router-dom';

class Header extends Component {

  handleClick(url) {
    this.props.navigate(url);
  }
  
  render() {
    return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6"
            component="div" sx={{ flexGrow: 1 }}>
            Canadian Twitter Traffic Reports
          </Typography>
          <Button color="inherit" onClick={() => this.handleClick('/')}>Home</Button>
          <Button color="inherit" onClick={() => this.handleClick('/about')}>About</Button>
          <Button color="inherit" onClick={() => this.handleClick('/provinces')}>Provinces</Button>
          <Button color="inherit" onClick={() => this.handleClick('/login')}>Login</Button>
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