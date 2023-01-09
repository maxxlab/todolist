import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import {Button} from '@mui/material';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Box from '@mui/material/Box';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import {removeTodo, toggleTodoComplete} from '../../store/slices/todoSlice';
import './taskStyle.css';
import { useParams } from 'react-router-dom';

interface taskProps {
    id: string;
    text: string
    completed: boolean
}
interface listProps {
    id: string,
    title:string
  }
export default function Task({id, text, completed}: taskProps) {
    const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

    };
    const taskChecked = {
        textDecoration:"line-through"
    }
    const taskUnchecked = {
        textDecoration: "none"
    }
    const dispatch = useDispatch();
    const user = useSelector((state: any) => state.user);
    const lists = useSelector((state:any)=>state.lists.lists);
    const params = useParams();
    let titleID:string = "";
    lists.forEach((list:listProps) => {
        if(list.title === params.title){
          titleID = list.id
        }
      })
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: "row",
            justifyContent: "space-between"
        }}>
            <Typography variant="h6" component="div">
                <Checkbox checked={completed} onChange={() => dispatch(toggleTodoComplete({id}))} className="taskCheck"/>
                <span style={
                    completed? taskChecked:taskUnchecked
                }>{text}</span>
            </Typography>
            <Box>
                <Button>
                    <StarBorderIcon color="primary"/>
                </Button>
                <Button onClick={() => dispatch(removeTodo({user, id, titleID}))}>
                    <DeleteIcon color="primary"/>
                </Button>
            </Box>

        </Box>
    );
}