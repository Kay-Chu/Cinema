import React from "react";
import { Stack, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Tile } from "./tile";

const Featured = ({movies}) => {

    return (
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
    );
};

export default Featured;