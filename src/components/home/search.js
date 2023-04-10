import React from "react";
import { useState } from 'react';
// import { IconButton, TextField } from '@mui/material';
// import SearchIcon from "@mui/icons-material/Search";
import SearchBar from '@mkyy/mui-search-bar';


const Search = ({keyword, setKeyword}) => {


  const handleChange = (e) => {
  }

  const handleSearch = (e) => {
  }

  return (
  <div className="search">
      <div className="search_text">
          <span>Please enter a keyword:</span>
      </div>

      <SearchBar
        value={keyword}
        onChange={handleChange}
        onSearch={handleSearch}
      />
      {/* <form>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="Enter a city name"
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "blue" }} />
      </IconButton>
    </form> */}


  </div>
  );
        
};

export default Search;
