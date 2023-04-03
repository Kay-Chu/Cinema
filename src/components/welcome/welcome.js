// import '../../style/modules/welcome.css';
import React from "react";
import { Typography , Button, Box} from '@mui/material';
import loading from '../../images/loading.gif';
import { Link } from "react-router-dom";


const Welcome = () => {
    return (
        
        <div className="welcome">
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
                    <img src={ loading } alt="loading" className="loading-gif" width="100px" height="100px"/>
                </Box>
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Link to="/Home" style={{ textDecoration: 'none' }}>
                        <Button className="enter-btn" variant="outlined"><span>Enter</span></Button>
                    </Link>
                </Box>
            </div>
        </div>
    );
};

export { Welcome };