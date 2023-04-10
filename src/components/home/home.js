import React from "react";
import { Grid, Button } from '@mui/material';
import Search from "./search";
import Featured from "./featured";
import Library from "./library";
import { Content } from "./content";
import axios from '../../api/axios';
import useAuth from "../../hooks/useAuth";
// import mariadb from 'mariadb';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
    

    // const pool = mariadb.createPool({
    //     host: 'code.kaying.site',
    //     user: 'cinema',
    //     password: 'wPMqYR',
    //     connectionLimit: 5
    // });

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
        console.log("exec once");
        const options = {
            method: 'GET',
            url: 'search/basic',
            params: {   
                country: 'us',
                service: 'netflix',
                type: 'movie',
                genre: '878'
            }
        };

        axios.request(options).then(function (response) {
            setMovies(response.data.result == undefined ? response.data.results : response.data.result);
            console.log("movies");
        }).catch(function (error) {
            console.error(error);
        });
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