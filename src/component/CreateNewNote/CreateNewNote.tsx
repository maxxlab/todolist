import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

export default function CreateNewNote(){
    return(
        <>
            <ListItemButton sx={{color: "blue"}}>
                <ListItemText  primary="+ add new note" />
            </ListItemButton>
            <ListItemButton sx={{color: "blue"}}>
                <ListItemText primary="+ add new tasklist" />
            </ListItemButton>
        </>
    );
};