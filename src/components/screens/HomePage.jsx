import React from 'react'
import './HomePage.css'
import requests from '../Requests'
import Row from './Row'
import Navbar from '../Navbar'
import Video from './Video'
import AnimeInfo from './AnimeInfo'
import Info from './Info'
import Nav from '../Nav'
import SearchAnime from './Search'

const HomePage = () => {
  return (
    <div className='home'>
        {/* <Navbar /> */}
        {/* <AnimeInfo /> */}
        {/* <Nav /> */}
        {/* <AnimeInfo /> */}
        {/* <SearchAnime /> */}
        <Info />
        <Row title='POPULAR'
          fetchUrl={requests.getPopular}
          isLargeRow
        />
        <Row title='TOP AIRING'
          fetchUrl={requests.getTopAnime}
          isLargeRow
        />
        <Row title='ANIME MOVIES'
        fetchUrl={requests.getMovies}
        isLargeRow
        />
    </div>
  )
}

export default HomePage