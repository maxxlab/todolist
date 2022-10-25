import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Task from "../Task/Task";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
export default function TaskCard() {
  
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
            <Task taskTitle = "Task1"/>
            <Task taskTitle = "Task2"/>
            <Task taskTitle = "Task3"/>
          </Box>
            <ListItemButton sx={{color: "blue"}}>
                <ListItemText primary="+ add new task" />
            </ListItemButton>
        </CardContent>
      </Card>
    </div>
  );
}