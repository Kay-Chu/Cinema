import React from "react";
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const Tile = ({movie}) => {

    return (
        <ImageListItem key={movie.imdbID}>
          <img
            src={`${movie.posterURLs['original']}?w=248&fit=crop&auto=format`}
            srcSet={`${movie.posterURLs['original']}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={movie.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={movie.title}
            position="below"
          />
        </ImageListItem>
    );
};

export { Tile };