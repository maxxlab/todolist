
type MainProps = {
  children: React.ReactNode; 
};

export default function Main(props: MainProps) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      width:"100%",
      minHeight: "500px"
     }}>
      {props.children}
      
    </div>
  );
}
