import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import { Box } from '@mui/material';

function App() {
  const [open, setOpen] = React.useState(false);
  return (
     <Box
      sx={{
        height:"100%"
      }}
     >
      
      <Header
        StateChanger={()=>{
          setOpen(!open);
        }}
      ></Header>
      <Navbar
        openNavbar={open}
      ></Navbar>
    </Box> 
  );
}

export default App;
