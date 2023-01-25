import { Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { changeListTitle, fetchList } from "../../store/slices/listSlice";
interface Data{
    option:string,
    id:string
}
export default function ListTitleChangeModal( {option, id}:Data ){

    const [open, setOpen] = useState(false);
    const user = useSelector((state: any) => state.user)
    const handleChange = () => setOpen(!open);
    const [title, changeTitle] = useState('');
    const dispatch = useAppDispatch();
    const changeListTitleModal = () => {
        dispatch(changeListTitle({uid:user.id, id:id, title:title}))
        handleChange();
    }
    return (
        <>
            <Link to={"/" + title}>
                <MenuItem onClick={handleChange}>
                {option}
                </MenuItem>
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
                        id="changeListTitle" 
                        variant="outlined"
                        onChange={(e)=>changeTitle(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleChange}>Exit</Button>
                        <Button onClick={changeListTitleModal}>Create</Button>
                    </DialogActions>
                </Dialog>
            </Link>
        </>
    )
}