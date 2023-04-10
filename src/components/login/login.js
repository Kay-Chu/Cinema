// import '../../style/modules/welcome.css';
import React from "react";
import { Typography , Button, Box} from '@mui/material';
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state;
    const from = state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        setAuth({
            username: 'myusername',
            password: 'mypassword'
        });
        navigate(from, { replace: true });
    }

    return (
        
        <div className="login">
            <div className="stars"></div>
            <div className="stars2"></div>
            <div className="stars3"></div>
            <div className="content">
                
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Typography align="center" className="welcome-text" ><span>WELCOME</span></Typography>
                </Box>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    {/* <img src={ loading } alt="loading" className="loading-gif" width="100px" height="100px"/> */}
                </Box>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <div>
                        <Button onClick={handleLogin} className="enter-btn" variant="outlined"><span>Enter</span></Button>
                    </div>
                </Box>
            </div>
        </div>
    );
};

export { Login };