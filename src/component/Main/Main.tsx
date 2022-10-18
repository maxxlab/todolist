import TaskCard from '../TaskCard/TaskCard';


export default function Main() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      width:"100%",
      height: "100%"
     }}>
      <TaskCard />
    </div>
  );
}
