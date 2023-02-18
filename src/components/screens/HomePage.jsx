import React from 'react'
import './HomePage.css'
import Popular from './Popular'
import TopAir from './TopAir'
import requests from '../Requests'
import Row from './Row'

const HomePage = () => {
  return (
    <div className='home'>
        {/* <Popular/> */}
        <br></br>
        {/* <TopAir/> */}
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