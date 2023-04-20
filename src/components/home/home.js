import React from "react";
import { Grid, Button } from '@mui/material';
import Search from "./search";
import Library from "./library";
import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
    
    const navigate = useNavigate();

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.removeItem('auth');
        navigate('/login', { replace: true });
    }

    const { auth, setAuth } = useAuth();

    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        // getMovie('batman','us')
    }, []);

    return (
        <div className="home">
            <Grid container spacing={2}>
                <Grid item md={12}>
                    <Search keyword={keyword} setKeyword={setKeyword}/>
                </Grid>
                <Grid item md={12}>
                    <h1>{keyword}</h1>
                    <Library />
                </Grid>
                <Grid item md={12}>
                    <Button onClick={handleLogout} className="logout-btn" variant="outlined"><span>Logout</span></Button>
                </Grid>
            </Grid>

        </div>
    );
};

export { Home };