import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
export default function Note() {
  
  return (
    <div style={{ 
      width: "95%",
      minWidth: 50,
      padding: 20,
      position: "inherit",
      
    }}>
      <Card sx={{}}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Note
          </Typography>
          <Box>
            <textarea
            style={{
                width: "98.5%",
                height: "500px" ,
                marginLeft: "auto",
                marginRight: "auto",
                padding:"10px",
                fontSize: "16px",
                resize: "none"
            }}>
            </textarea>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}