import React from "react";
import { Tile } from "./tile";
import { Search } from "./search";
import { Library } from "./library";
import { Content } from "./content";
import { Grid, Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import axios from '../../api/axios';
import useAuth from "../../hooks/useAuth";
// import mariadb from 'mariadb';
import { useState, useEffect } from 'react';

const Home = () => {

    // const pool = mariadb.createPool({
    //     host: 'code.kaying.site',
    //     user: 'cinema',
    //     password: 'wPMqYR',
    //     connectionLimit: 5
    // });

    const { auth, setAuth } = useAuth();

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
        setAuth({});
        console.log(!auth.isLoggedIn);
    }, []);

    return (
        <div className="home">

            <Search />

            <div className="featured">
                <div className="genre">
                    <FormControl fullWidth>
                    <InputLabel id="genre-select-label">Genre</InputLabel>
                    <Select
                        labelId="genre-select-label"
                        id="genre-select"
                        value={878}
                        label="Sci-Fi"
                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    </FormControl>
                </div>
                <div className="movie">
                    {/* <ImageList sx={{ overflowX: 'auto', width: 500, height: 340 }} > */}
                        <Stack sx={{ overflowX: 'auto', overflowY: 'hidden', width: '70vw', height: 300 }} direction="row" spacing={2}>
                            {movies.map((movie)=>(<Tile movie={movie} />))}
                        </Stack>
                    {/* </ImageList> */}
                </div>

            </div>
            <Library />

        </div>
    );
};

export { Home };