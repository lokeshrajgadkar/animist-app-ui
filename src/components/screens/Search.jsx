import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';
import './Search.css'

const SearchAnime = () => {
  const [query, setQuery] = useState('');
    //const [page, setPage] = useState(1);
    const [animeList, setAnimeList] = useState([]);
    const [selectedAnimeId, setSelectedAnimeId] = useState(null);
    const navigate = useNavigate();

    const handleSearch = () => {
      axios.get(`https://api.consumet.org/anime/gogoanime/${query}`)
        .then(response => {
          setAnimeList(response.data.results);
        })
        .catch(error => {
          console.log(error);
        });
    }

    const handleClick = (event, id) => {
      navigate('/info',{state:{id: id}})
    };

    return (
      <div className='container'>
        <h1>Anime Search</h1>
        <div className='search'>
          <input type="text" value={query} onChange={e => setQuery(e.target.value)} />
          <button type='submit' onClick={() =>handleSearch()}>Search</button>
        </div>
        <ul>
          {animeList.map((anime,index) => (
            <div className='li-card' key={index} onClick={event  => handleClick(event,anime.id)}>
              <img src={anime.image} alt={anime.title} />
              <h3>{anime.title}</h3>
              <p>{anime.releaseDate}</p>
            </div>
          ))}
        </ul>
      </div>
    );
}

export default SearchAnime