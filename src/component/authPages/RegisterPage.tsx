import { Link } from 'react-router-dom';
import { SignUp } from '../AuthComponents/SignUp';
import { Box } from '@mui/material';
import { Login } from '../AuthComponents/Login';
import { Typography } from '@mui/material';
import { padding } from '@mui/system';
import { Button } from "@mui/material";

const RegisterPage = () => {
    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '2rem'
            }}>
                <Typography variant="h3" color="inherit" component="div" sx={{marginBottom: '2rem'}}>Sign Up</Typography>
                <SignUp />
                <Typography variant="h6" color="inherit" component="div">
                    Already have an account? <Link to="/login">
                    <Button variant="outlined">Log in</Button>
                    </Link>
                </Typography>
            </Box>

        </>
    )
}

export default RegisterPage