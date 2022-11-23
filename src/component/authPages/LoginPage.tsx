import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Login } from '../AuthComponents/Login';
import { Typography } from '@mui/material';
import { Button } from "@mui/material";


const LoginPage = () => {
    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '2rem'
            }}>
                <Typography variant="h3" color="inherit" component="div" sx={{marginBottom: '2rem'}}>
                    Log in
                </Typography>

                <Login />
                <Typography variant="h6" color="inherit" component="div">
                Don't have an account? <Link to="/register">
                    <Button variant="outlined">register</Button>
                        </Link>
                </Typography>
            </Box>

        </>
    )
}

export default LoginPage