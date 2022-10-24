import TaskCard from '../TaskCard/TaskCard';
import CompletedTaskCards from '../TaskCard/CompleteTaskCards';
import CompleteTaskCards from '../TaskCard/CompleteTaskCards';

export default function Main() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      width:"100%",
      height: "100%"
     }}>
      <TaskCard />
      <CompleteTaskCards/>
    </div>
  );
}
