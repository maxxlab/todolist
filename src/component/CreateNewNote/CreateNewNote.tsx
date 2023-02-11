import {useState} from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useAppDispatch } from "../../hooks/redux-hooks";
import { addList } from '../../store/slices/listSlice';
import { useSelector } from 'react-redux';

export default function CreateNewNote() {
    const [open, setOpen] = useState(false);
    const [title, changeTitle] = useState('')

    const dispatch = useAppDispatch();
    const user = useSelector((state: any) => state.user)
    const lists = useSelector((state:any) => state.lists)
    const handleChange = () => setOpen(!open);
    const createTasklist = () => {
        // alert(title);
        dispatch(addList({title, user, lists}));
        handleChange();
    }

    return (
        <>
            <ListItemButton sx={{ color: "blue" }}>
                <ListItemText primary="+ add new tasklist" onClick={handleChange} />
            </ListItemButton>
                <Dialog
                    open={open}
                    onClose={handleChange}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                <DialogTitle id="alert-dialog-title">
                {"Enter a name of your new tasklist: "}
                </DialogTitle>
                <DialogContent>
                    <TextField 
                    sx={{
                        display:'flex', 
                        alignItems:'center'
                    }} 
                    id="createTasklist" 
                    variant="outlined"
                    onChange={(e)=>changeTitle(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleChange}>Exit</Button>
                    <Button onClick={createTasklist}>Create</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};