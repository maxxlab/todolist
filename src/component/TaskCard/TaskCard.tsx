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
import { addTodo, fetchTodo, readTasks } from '../../store/slices/todoSlice';
import { useAppDispatch } from "../../hooks/redux-hooks";
import { TaskList } from '../Task/TaskList';
import { useSelector } from 'react-redux';

interface tasksProps {
  id: string,
  text: string,
  completed: boolean
}

export default function TaskCard() {

  const [tasks, setTasks] = useState<tasksProps[]>([]);
  const [text, setText] = useState('');
  const user = useSelector((state: any) => state.user);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodo(user.id));
  }, [])

  const addTask = () => {
    dispatch(addTodo({ text, user }));
    setText('');
  }



  return (
    <div style={{
      width: "95%",
      minWidth: 50,
      padding: 20,
      position: "inherit"
    }}>
      <Card sx={{}}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Tasks
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