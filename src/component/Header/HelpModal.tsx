import { Help } from "@mui/icons-material";
import { Dialog, DialogContent, DialogTitle, IconButton, Link, MenuItem } from "@mui/material";
import { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import { Box } from "@mui/system";
const HELP = "Contacts";
const IvanFedoniuk = "Ivan Fedoniuk";
const MaxLabik = "Max Labik";
export default function HelpModal(){
    const [open, changeWindowState] = useState(false);
    const handleChange = () => {
        changeWindowState(!open);
    }
    return(
        <>
            <MenuItem onClick={handleChange}>
                {HELP}
            </MenuItem>
            <Dialog
                open={open}
                onClose={handleChange}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle 
                    id="alert-dialog-title" 
                    sx={{
                        display:"flex",
                        justifyContent:"space-between"
                        }}>
                    {HELP}
                    <IconButton onClick={handleChange}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <h4>
                    Thank you for using this application!
                    </h4>
                    <p>
                        If you have any questions, you can contact with developers of this app.
                        <br/>
                        Links below:
                    </p>
                    <Link underline="hover" href="https://github.com/Miurionochek">{IvanFedoniuk}</Link>
                    <br/>
                    <Link underline="hover" href="https://github.com/maxxlab">{MaxLabik}</Link>
                </DialogContent>
            </Dialog>
        </>
    )
}