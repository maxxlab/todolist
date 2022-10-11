import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function TaskCard() {
  return (
    <div style={{ 
      width: "100%",
      minWidth: 50, 
      margin: 20,
      position: "inherit"
    }}>
      <Card sx={{}}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            List
          </Typography>
          <TextField id="standard-basic" variant="standard" />
        </CardContent>
      </Card>
    </div>
  );
}