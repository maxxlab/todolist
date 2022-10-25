import TaskCard from '../TaskCard/TaskCard';
import CompleteTaskCards from '../TaskCard/CompleteTaskCards';
import EmptyTaskCard from '../TaskCard/EmptyTaskCard';

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
      <EmptyTaskCard/>
    </div>
  );
}
