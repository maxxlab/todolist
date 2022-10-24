import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import { Button } from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box';
interface title{
    taskTitle:string;
}
export default function CompletedTask({taskTitle}:title){
    return(
    <Box sx={{
        display: 'flex',
        flexDirection: "row",
        justifyContent: "space-between"
    }}>
        <Typography variant="h6" component="div" sx={{textDecoration: "line-through"}}>
            <Checkbox defaultChecked />{taskTitle}
        </Typography>
        <Button>
             <StarBorderIcon color="primary" />
        </Button>
    </Box>
    );
}