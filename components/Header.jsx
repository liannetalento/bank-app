import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  return (
    <AppBar position="static" style={{ background: '#fff', color: '#000', boxShadow: 'none' }}>
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
        <img src="/profile.jpg" alt="profile" style={{ width: 40, height: 40, borderRadius: '50%' }} />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
