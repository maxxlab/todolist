import React from 'react';
import Task from './Task';
import { useSelector } from 'react-redux';

export const TaskList = () => {

  const todos = useSelector((state : any) => state.todos.todos);
  return (
    <div>
      <>
      {
        todos.map((todo: any)=> (
          <Task key={todo.id} {...todo}/>
        ))
      }
      </>
    </div>
  )
}
