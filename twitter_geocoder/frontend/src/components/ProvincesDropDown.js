import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

export default function ProvincesDropDown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  let navigate = useNavigate();
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (url, province) => {
    setAnchorEl(null);
    
    if (province !== 'backdropClick'){
      navigate(url, {state:{province:province}})
    }
  };

  return (
    <div>
      <Button
        color="inherit" 
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Provinces
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={() => handleClose('/province', 'BC')} disabled>British Columbia</MenuItem>
        <MenuItem onClick={() => handleClose('/province', 'AB')}>Alberta</MenuItem>
        <MenuItem onClick={() => handleClose('/province', 'SK')} disabled>Saskatchewan</MenuItem>
        <MenuItem onClick={() => handleClose('/province', 'MB')} disabled>Manitoba</MenuItem>
        <MenuItem onClick={() => handleClose('/province', 'ON')} disabled>Ontario</MenuItem>
      </Menu>
    </div>
  );
}