import TaskCard from '../TaskCard/TaskCard';
import CompleteTaskCards from '../TaskCard/CompleteTaskCards';
import EmptyTaskCard from '../TaskCard/EmptyTaskCard';

type MainProps = {
  children: React.ReactNode; 
};

export default function Main(props: MainProps) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      width:"100%",
      height: "100%"
     }}>
      {props.children}
      
    </div>
  );
}
