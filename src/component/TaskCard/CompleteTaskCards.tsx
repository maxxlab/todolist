import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Task from "../Task/Task";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CompletedTask from '../Task/CompletedTask';
export default function CompletedTaskCard() {
  
  return (
    <div style={{ 
      width: "100%",
      minWidth: 50, 
      margin: 20,
      position: "inherit"
    }}>
      <Card sx={{marginRight: 5}}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Completed Tasks
          </Typography>
          <Box sx={{ 
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: "column" 
          }}>
            <CompletedTask taskTitle = "Task1"/>
            <CompletedTask taskTitle = "Task2"/>
            <CompletedTask taskTitle = "Task3"/>
          </Box>
            
        </CardContent>
      </Card>
    </div>
  );
}