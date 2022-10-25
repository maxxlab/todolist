import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Task from "../Task/Task";
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
export default function EmptyTaskCard() {

  return (
    <div style={{
      width: "100%",
      minWidth: 50,
      margin: 20,
      position: "inherit"
    }}>
      <Card sx={{ marginRight: 5 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Tasks
          </Typography>
          <Typography sx={{fontSize: 13}}>
            There are no tasks...
          </Typography>
          <ListItemButton sx={{ color: "blue" }}>
            <ListItemText primary="+ add new task" />
          </ListItemButton>
        </CardContent>
      </Card>
    </div>
  );
}