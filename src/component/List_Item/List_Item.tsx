import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';

export default function ListItem(){
    const [open, setOpen] = React.useState(true);

    const handleClick = () => {
    setOpen(!open);
  };
  return(
        <>
            <ListItemButton>
                <ListItemText primary="Tasks" />
            </ListItemButton>
            <ListItemButton>
                <ListItemText primary="Note1" />
            </ListItemButton>
            <ListItemButton>
                <ListItemText primary="Note2" />
            </ListItemButton>
            <ListItemButton onClick={handleClick}>
                <ListItemText primary="Folder1" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItemButton>
                    <ListItemText primary="Note3" />
                    </ListItemButton>
                    <ListItemButton>
                    <ListItemText primary="Note4" />
                    </ListItemButton>
                </List>
            </Collapse>
        </>
    );
}