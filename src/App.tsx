import React from 'react';
import './App.css';
import Main from './Main';
import Box from '@mui/material/Box';
import { Toolbar, IconButton, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './component/Menu';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled} from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import {listItem} from './component/List_Item'

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(0),
        },
      }),
    },
  }),
);
function App() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="absolute" open={open}>
        <Toolbar variant="dense" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

          <IconButton edge="start" color="inherit" aria-label="menu"  onClick={toggleDrawer} sx={{ 
            ...(open && { display: 'none' })
            ,
            
          }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" component="div">
            To Do
          </Typography>

          <Menu />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
              <Toolbar
                  sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  
                  }}
              >
                  <IconButton onClick={toggleDrawer}>
                      <ChevronLeftIcon />
                  </IconButton>
              </Toolbar>
              <List component="nav" sx={{ 
            ...(!open && { display: 'none' })
            ,
            
          }}>
                  {listItem}
              </List>
          </Drawer>
      <Main/>
    </Box> 
  );
}

export default App;
