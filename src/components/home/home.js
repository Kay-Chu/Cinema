import React from "react";
import { Grid, Button } from '@mui/material';
import Search from "./search";
import Featured from "./featured";
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
    const [movies, setMovies] = React.useState([
        {
            imdbID:"tt9850370",
            title:"#AnneFrank. Parallel Stories",
            posterURLs: {
                original:"https://image.tmdb.org/t/p/original/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg"
            }
        },
        {
            imdbID:"tt9850371",
            title:"#AnneFrank. Parallel Stories",
            posterURLs: {
                original:"https://image.tmdb.org/t/p/original/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg"
            }
        },
        {
            imdbID:"tt9850372",
            title:"#AnneFrank. Parallel Stories",
            posterURLs: {
                original:"https://image.tmdb.org/t/p/original/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg"
            }
        },
        {
            imdbID:"tt9850373",
            title:"#AnneFrank. Parallel Stories",
            posterURLs: {
                original:"https://image.tmdb.org/t/p/original/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg"
            }
        },
        {
            imdbID:"tt9850374",
            title:"#AnneFrank. Parallel Stories",
            posterURLs: {
                original:"https://image.tmdb.org/t/p/original/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg"
            }
        },
        {
            imdbID:"tt9850375",
            title:"#AnneFrank. Parallel Stories",
            posterURLs: {
                original:"https://image.tmdb.org/t/p/original/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg"
            }
        },
        {
            imdbID:"tt9850376",
            title:"#AnneFrank. Parallel Stories",
            posterURLs: {
                original:"https://image.tmdb.org/t/p/original/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg"
            }
        },
        {
            imdbID:"tt9850377",
            title:"#AnneFrank. Parallel Stories",
            posterURLs: {
                original:"https://image.tmdb.org/t/p/original/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg"
            }
        },
        {
            imdbID:"tt9850378",
            title:"#AnneFrank. Parallel Stories",
            posterURLs: {
                original:"https://image.tmdb.org/t/p/original/hkC4yNDFmW1yQuQhtZydMeRuaAb.jpg"
            }
        }
    ]);




    function getMovie(search_title, country_code) {

    }

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
                    <Featured movies={movies} />
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