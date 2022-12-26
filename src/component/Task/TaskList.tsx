import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';

interface taskProps {
  id: string;
  text: string
  completed: boolean
}

export const TaskList = () => {

  const todos = useSelector((state : any) => state.todos.todos);
  console.log(todos)
  return (
    <div>
      <>
      {
        todos.map((todo: taskProps)=> (
          <Task key={todo.id} text={todo.text} id={todo.id} completed={todo.completed}/>
        ))
      }
      </>
    </div>
  )
}
