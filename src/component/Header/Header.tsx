import {Toolbar, IconButton, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '../Menu/Menu';
import AppBar from '@mui/material/AppBar';
import UserOutsideSystem from "../User/UserOutsideSystem"
import UserInsideSystem from "../User/UserInsideSystem"
import Box from '@mui/material/Box';

interface Data{
  StateChanger:Function;
}
export default function Header({StateChanger}:Data) {
  return (
    <>
      <AppBar position='static'>
          <Toolbar variant="dense" sx={{ display: 'static', justifyContent: 'space-between', alignItems: 'center' }}>

            <IconButton edge="start" color="inherit" aria-label="menu"  onClick={()=>StateChanger()}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit" component="div">
              To Do
            </Typography>
            <Box sx={{
              display: "flex"
            }}>
              <UserInsideSystem/>
            </Box>
          </Toolbar>
        </AppBar>
    </>
  );
}