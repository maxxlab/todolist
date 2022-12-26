import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import {Button} from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';

interface taskProps {
    id: string;
    text: string
    completed: boolean
}

export default function Task({id, text, completed}: taskProps) {
    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

    };

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: "row",
            justifyContent: "space-between"
        }}>
            <Typography variant="h6" component="div">
                <Checkbox/>{text}
            </Typography>
            <Box>
                <Button>
                    <StarBorderIcon color="primary"/>
                </Button>
                <Button>
                    <DeleteIcon color="primary"/>
                </Button>
            </Box>

        </Box>
    );
}