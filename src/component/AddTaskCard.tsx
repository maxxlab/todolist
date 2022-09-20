import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function TaskCard() {
  return (
    <>
      <Card sx={{ minWidth: 275, margin: 2 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          List
        </Typography>
        <TextField id="standard-basic" variant="standard" />
      </CardContent>
    </Card>
    </>
  );
}