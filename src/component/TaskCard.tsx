import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';

export default function TaskCard() {
  return (
    <>
      <Card sx={{ minWidth: 275, margin: 2 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            List
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="h6" component="div">
              <Checkbox />Task Name
              
            </Typography>
            <StarBorderIcon color="primary" />
          </Box>

          <Typography sx={{ textAlign: 'right' }}>

          </Typography>
        </CardContent>
      </Card>
    </>
  );
}