import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CreationModal from '../Modal/CreationModal';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center'
};

const ariaLabel = { 'aria-label': 'description' };

export default function CreateNewNote() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <ListItemButton sx={{ color: "blue" }}>
                <ListItemText primary="+ add new note" onClick={handleOpen} />
                
            </ListItemButton>
            <ListItemButton sx={{ color: "blue" }}>
                <ListItemText primary="+ add new tasklist" />
            </ListItemButton>
            <ListItemButton sx={{ color: "blue" }}>
                <ListItemText primary="+ add new folder" />
            </ListItemButton>
        </>
    );
};