import Task from './Task';
import { useSelector } from 'react-redux';

interface taskProps {
  id: string;
  text: string
  completed: boolean
  isShine: boolean
}

export const TaskList = () => {

  const todos = useSelector((state : any) => state.todos.todos);
  return (
      <>
        {
          todos.map((todo: taskProps)=> (
            <Task key={todo.id} text={todo.text} id={todo.id} completed={todo.completed} isShine={todo.isShine}/>
          ))
        }
      </>
  )
}
