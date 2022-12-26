import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Task from "../Task/Task";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';
import { getDatabase, ref, set, child, get, onValue, DataSnapshot, remove } from "firebase/database";
import guid from '../../tools/tools';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/slices/todoSlice';
import { useAppDispatch } from "../../hooks/redux-hooks";
import { TaskList } from '../Task/TaskList';

interface tasksProps {
  id: string,
  text: string,
  completed: boolean
}

export default function TaskCard() {

  const [tasks, setTasks] = useState<tasksProps[]>([]);
  const [text, setText] = useState('');

  const dispatch = useAppDispatch();


  const addTask = () => {
    dispatch(addTodo( text ));
    setText('');
  }


  function readTasks() {
    const db = getDatabase();
    const starCountRef = ref(db, 'todo/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const taskList = [];
      for (let id in data) {
        taskList.push(data[id]);
      }
      // setTasks(taskList);
      console.log(data);
    });
  }

  useEffect(() => {
    readTasks();
  }, []);

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
            <>
              <TaskList/>
              {
                // tasks.map(task => <Task taskTitle={task.text} id={''} completed={false} key={guid()} />)
              }
            </>

          </Box>

          {/* <Box sx={{ 
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: "column" 
          }}>
            <Task taskTitle = "Task1"/>
            <Task taskTitle = "Task2"/>
            <Task taskTitle = "Task3"/>
          </Box>
            <ListItemButton sx={{color: "blue"}}>
                <ListItemText primary="+ add new task" />
            </ListItemButton> */}
        </CardContent>
      </Card>
    </div>
  );

}