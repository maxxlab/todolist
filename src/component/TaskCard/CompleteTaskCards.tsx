import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CompletedTask from '../Task/CompletedTask';
export default function CompletedTaskCard() {
  
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