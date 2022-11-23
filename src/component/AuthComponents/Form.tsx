import {FC, useState } from "react";
import TextField from '@mui/material/TextField';
import { Button } from "@mui/material";

interface FormProps {
  title: string;
  handleClick: (email: string, pass: string)=>void;
}
const Form: FC<FormProps> = ({title, handleClick}) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <>
      <TextField id="outlined-basic" type="email" value={email} 
      onChange={(e) => setEmail(e.target.value)}
      placeholder="email" variant="outlined" label="email" sx={{
        marginBottom: '1rem',
        width: '20rem'
      }} />
      <TextField id="outlined-basic" type="password" value={pass}
      onChange={(e) => setPass(e.target.value)}
      placeholder="password" label="password" variant="outlined" sx={{
        marginBottom: '1rem',
        width: '20rem'
      }} />
      <Button variant="contained" onClick={() => handleClick(email, pass)} sx={{
        marginBottom: '1rem'
      }}>{title}</Button>
      
    </>
  );
};

export { Form };
