import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Task from "../Task/Task";
import ListItemButton from '@mui/material/ListItemButton';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { CheckBox, List } from '@mui/icons-material';
import { useState } from 'react';

interface tasksProps {
  id: string,
  text: string,
  completed: boolean
}

export default function TaskCard() {

  const [tasks, setTasks] = useState<tasksProps[]>([]);
  const [text, setText] = useState('');

  const addTask = () => {
    if (text.trim().length) {
      setTasks([
        ...tasks,
        {
          id: new Date().toISOString(),
          text,
          completed: false
        }
      ])
      setText('');
    }
  }

  const  removeTask = (taskId: string) => {
    setTasks(tasks.filter(task => task.id !== taskId))
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
            <>
              {
                tasks.map(task => <Task taskTitle={task.text} id={''} completed={false}/>)
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