import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Task from "../Task/Task"
export default function TaskCard() {
  
  return (
    <div style={{ 
      width: "100%",
      minWidth: 50, 
      margin: 20,
      position: "inherit"
    }}>
      <Card>
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

          <Typography sx={{ textAlign: 'right' }}>

          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}