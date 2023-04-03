import React from "react";
import { Tile } from "./tile";
import { Content } from "./content";
import { Grid } from '@mui/material';
import axios from 'axios';
import ImageList from '@mui/material/ImageList';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';

const Home = () => {


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
        console.log("exec once")
            const options = {
                method: 'GET',
                url: 'https://streaming-availability.p.rapidapi.com/search/basic',
                params: {
                  country: 'us',
                  service: 'netflix',
                  type: 'movie',
                  genre: '878'
                },
                headers: {
                    'X-RapidAPI-Key': '23e7de4453mshb034b7870fedc6bp18739fjsn4e8925f0ee59',
                    'X-RapidAPI-Host': 'streaming-availability.p.rapidapi.com'
                }
            };

            axios.request(options).then(function (response) {
                setMovies(response.data.results);
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

            <div className="movie">
                {/* <ImageList sx={{ overflowX: 'auto', width: 500, height: 340 }} > */}
                    <Stack sx={{ overflowX: 'auto', overflowY: 'hidden', width: '70vw', height: 340 }} direction="row" spacing={2}>
                        {movies.map((movie)=>(<Tile movie={movie} />))}
                    </Stack>
                {/* </ImageList> */}
            </div>

        </div>
    );
};

export { Home };