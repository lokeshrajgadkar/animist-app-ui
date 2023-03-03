import React from 'react'
import './HomePage.css'
import Popular from './Popular'
import TopAir from './TopAir'
import requests from '../Requests'
import Row from './Row'
import Navbar from '../Navbar'
import Video from './Video'
import AnimeInfo from './AnimeInfo'
import Info from './Info'
import Nav from '../Nav'

const HomePage = () => {
  return (
    <div className='home'>
        {/* <Navbar /> */}
        {/* <AnimeInfo /> */}
        <Nav />
        <Info />
        {/* <Video/> */}
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