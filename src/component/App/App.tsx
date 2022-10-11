import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';


function App() {
  const [open, setOpen] = React.useState(false);
  let openNavbarApp:boolean = open;
  return (
    <> 
      <Header
        StateChanger={()=>{
          setOpen(!open);
        }}
      ></Header>
      <Navbar
        openNavbar={openNavbarApp}
      ></Navbar>
    </> 
  );
}

export default App;
