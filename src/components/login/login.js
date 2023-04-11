// import '../../style/modules/welcome.css';
import React, { useState } from "react";
import { Typography , Button, Box, Stack, TextField} from '@mui/material';
import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from "../../api/axios";


const Login = () => {
    const { setAuth } = useAuth();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const navigate = useNavigate();
    const location = useLocation();
    const state = location.state;
    const from = state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        setUsernameError(false);
        setPasswordError(false);
        const options = {
            method: 'POST',
            url: 'login',
            data: {   
                username: username,
                password: password
            }
        };
        axios.request(options).then(function (response) {
            if (!response.data.userExists) {
                setUsernameError(true);
            } else if (!response.data.passwordMatch) {
                setPasswordError(true);
            } else {
                setAuth({
                    id: response.data.id,
                    username: response.data.username,
                    token: response.data.token
                });
                navigate(from, { replace: true });
            }
        }).catch(function (error) {
            console.error(error);
        });
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
                    {/* <InputLabel className="login-label" >Login</InputLabel> */}
                    <Stack className="grid-container" spacing={2}>
                        <TextField
                            className="username-input"
                            id="username-input"
                            label="Username"
                            variant="outlined"
                            value={username}
                            placeholder="Username"
                            error={usernameError}
                            helperText={usernameError ? "Username does not Exist!" : ""}
                            onChange={(event) => {
                            setUsername(event.target.value);
                            }}
                        />
                        <TextField
                            className="password-input"
                            id="password-input"
                            label="Password"
                            variant="outlined"
                            value={password}
                            placeholder="Password"
                            error={passwordError}
                            helperText={passwordError ? "Password Incorrect!" : ""}
                            type="password"
                            onChange={(event) => {
                            setPassword(event.target.value);
                            }}
                        />
                    </Stack>
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