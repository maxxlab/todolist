import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';

function App() {
  const [open, setOpen] = React.useState(false);
  return (
    <> 
      <Header
        StateChanger={()=>{
          setOpen(!open);
        }}
      ></Header>
      <Navbar
        openNavbar={open}
      ></Navbar>
    </> 
  );
}

export default App;
