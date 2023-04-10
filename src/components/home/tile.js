import React from "react";
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';

const Tile = ({movie}) => {

    return (
        <ImageListItem key={movie.imdbID}>
          <img
            src={`${movie.posterURLs['original']}?w=200&fit=crop&auto=format`}
            srcSet={`${movie.posterURLs['original']}?w=200&fit=crop&auto=format&dpr=2 2x`}
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

// import React from "react";

// const Card = ({title, description, image}) => {

//     return (
//         <>
//             <div className="container_card">
//                 <div className="card">
//                     <div className="imgBx">
//                         <img src={image} alt=""/>
//                     </div>
//                     <div className="content">
//                         <h2>{title}</h2>
//                         <p>{description}</p>
//                     </div>
//                 </div>

//             </div>

//         </>
//     );
// };

// export { Card };