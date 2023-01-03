import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';
import {useAuth} from '../../hooks/use-auth';

interface taskProps {
  id: string;
  text: string
  completed: boolean
}

export const TaskList = () => {

  const todos = useSelector((state : any) => state.todos.todos);
  const user = useSelector((state : any) => state.user);
  console.log(todos);
  console.log(user);
  return (
      <>
        {
          todos.map((todo: taskProps)=> (
            <Task key={todo.id} text={todo.text} id={todo.id} completed={todo.completed}/>
          ))
        }
      </>
  )
}
