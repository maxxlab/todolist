import React from 'react';
import TaskCard from '../TaskCard/TaskCard';
import AddTaskCard from '../AddTaskCard/AddTaskCard';


export default function Main() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      width:"100%"
     }}>
      <AddTaskCard />
      <TaskCard />
      
    </div>
  );
}
