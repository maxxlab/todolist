import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PersonIcon from '@mui/icons-material/Person';
import { signOut } from '@firebase/auth';
import { Link } from 'react-router-dom';
import LoginPage from '../authPages/LoginPage';

const option = [
  'Settings',
  'Help',
  'Sign out',
];

const ITEM_HEIGHT = 48;


export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  

  return (
    <div>
      <IconButton
        color='inherit'
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <PersonIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem onClick={handleClose}>
            {option[0]}
        </MenuItem>
        <MenuItem onClick={handleClose}>
            {option[1]}
        </MenuItem>
        <Link to="/login">
          <MenuItem>
            {option[2]}
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}


