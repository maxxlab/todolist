import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './component/Menu';


export default function Header() {
  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            To Do
          </Typography>

          <Menu />
        </Toolbar>
      </AppBar>
    </>
  );
}