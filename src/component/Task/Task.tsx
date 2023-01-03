import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import {Button} from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import {removeTodo, toggleTodoComplete} from '../../store/slices/todoSlice';
import './taskStyle.css';

interface taskProps {
    id: string;
    text: string
    completed: boolean
}

export default function Task({id, text, completed}: taskProps) {
    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

    };

    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: "row",
            justifyContent: "space-between"
        }}>
            <Typography variant="h6" component="div">
                <Checkbox checked={completed} onChange={() => dispatch(toggleTodoComplete({id}))} className="taskCheck"/>
                <span>{text}</span>
            </Typography>
            <Box>
                <Button>
                    <StarBorderIcon color="primary"/>
                </Button>
                <Button onClick={() => dispatch(removeTodo({user, id}))}>
                    <DeleteIcon color="primary"/>
                </Button>
            </Box>

        </Box>
    );
}