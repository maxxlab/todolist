import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useAppDispatch } from '../../hooks/redux-hooks';
import { removeList } from '../../store/slices/listSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const options = [
  'Delete',
  'Rename'
];

const ITEM_HEIGHT = 48;

export default function LongMenu(props: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const user = useSelector((state:any) => state.user);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {

    setAnchorEl(null);
  };

  const dispatch = useAppDispatch();

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
        <MoreVertIcon />
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
        <Link to={"/"}>
          <MenuItem onClick={() => {
            dispatch(removeList({uid: user.id, id: props.id}));
          }}>
            {options[0]}
          </MenuItem>
        </Link>
        <MenuItem onClick={handleClose}>
          {options[1]}
        </MenuItem>
      </Menu>
    </div>
  );
}
