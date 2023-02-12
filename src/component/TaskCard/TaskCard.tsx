import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Task from "../Task/Task";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { getDatabase, ref, set, child, get, onValue, DataSnapshot, remove } from "firebase/database";
import { useDispatch } from 'react-redux';
import { addTodo, fetchTodo } from '../../store/slices/todoSlice';
import { useAppDispatch } from "../../hooks/redux-hooks";
import { TaskList } from '../Task/TaskList';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

interface tasksProps {
  id: string,
  text: string,
  completed: boolean
}
interface listProps {
  id: string,
  title:string
}


export default function TaskCard() {

  const [tasks, setTasks] = useState<tasksProps[]>([]);
  const [text, setText] = useState('');
  const user = useSelector((state: any) => state.user);
  const lists = useSelector((state:any)=>state.lists.lists);
  console.log(lists)
  const params = useParams();
  const dispatch = useAppDispatch();
  let titleID:string = "";
  lists.forEach((list:listProps) => {
    if(list.title === params.title){
      titleID = list.id
    }
  })

  useEffect(() => {
    dispatch(fetchTodo({userID: user.id, titleID: titleID}));
  }, [dispatch, titleID, user.id])

  const addTask = () => {
    dispatch(addTodo({ text, user, titleID })); 
    setText('');
  }
  return ( 
    <div style={{
      width: "95%",
      minWidth: 50,
      padding: 20,
      position: "inherit"
    }}>
      <Card>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {params.title}
          </Typography>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: "column"
          }}>
            <Box>
              <TextField id="standard-basic" value={text} onChange={(e) => setText(e.target.value)} variant="standard" sx={{ width: '30rem', marginRight: '2rem' }} />
              <Button variant="contained" onClick={addTask}>Add</Button>
            </Box>
            <TaskList />
          </Box>
        </CardContent>
      </Card>
    </div>
  );

}