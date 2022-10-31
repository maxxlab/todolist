import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import Menu from '../Menu/Menu';

import { Link } from 'react-router-dom';

export default function ListItem() {
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
        setOpen(!open);
    };
    return (
        <>
            <Link to="/tasks">
                <ListItemButton>
                    <ListItemText primary="Tasks" />
                    <Menu option={'task'} />
                </ListItemButton>
            </Link>
            <Link to="/home">
                <ListItemButton>
                    <ListItemText primary="Empty Tasks" />
                    <Menu option={'task'} />
                </ListItemButton>
            </Link>
            <Link to="/note">
                <ListItemButton>
                    <ListItemText primary="Note" />
                    <Menu option={'task'} />
                </ListItemButton>
            </Link>
            <Link to="/note">
                <ListItemButton>
                    <ListItemText primary="Note" />
                    <Menu option={'task'} />
                </ListItemButton>
            </Link>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary="Folder1" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <Link to="/note">
                        <ListItemButton>
                            <ListItemText primary="Note" />
                            <Menu option={'task'} />
                        </ListItemButton>
                    </Link>
                    <Link to="/note">
                        <ListItemButton>
                            <ListItemText primary="Note" />
                            <Menu option={'task'} />
                        </ListItemButton>
                    </Link>
                </List>
            </Collapse>
        </>
    );
}