import React from 'react';
import { List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  const menuItems = ['Dashboard', 'Settings', 'Profile', 'Statistics'];

  return (
    <div style={{ width: 250, background: '#F4F5FA', height: '100vh', padding: '20px' }}>
      <h2>My Dashboard</h2>
      <List>
        {menuItems.map((item, index) => (
          <ListItem button key={index}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Sidebar;
