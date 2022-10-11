import {Toolbar, IconButton, Typography} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '../Menu/Menu';
import AppBar from '@mui/material/AppBar';

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

            <Menu />
          </Toolbar>
        </AppBar>
    </>
  );
}