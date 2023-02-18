import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion";
import './Row.css'
import Details from './Details';

const Row = ({ title, fetchUrl, isLargeRow = false}) => {
    const dataFetchedRef = useRef(false);
    const [myData, setMyData] = useState([]);
    const [width, setWidth] = useState(0);
    const row = useRef();

    useEffect(() => {
        if (dataFetchedRef.current) return;
        dataFetchedRef.current = true;
    //     console.log(row.current.scrollWidth - row.current.scrollWidth);
    //  setWidth(row.current.scrollWidth + row.current.scrollWidth)
        fetchData();
    }, [])
    
    async function fetchData() {
        try {
            const response = await axios.get(fetchUrl);
            setMyData(response.data);
          } catch (error) {
            console.error(error);
          }
        }
    function getDetails(title) {
        return <Details title={title} />
    }
    console.log("🚀 ~ file: Row.jsx:7 ~ Row ~ myData", myData)

  return (
    <div className="row" style={{cursor: "grabbing"}}>
     {/* <motion.div drag="x" className='inner-row'> */}
        <h2>{title}</h2>
        <motion.div className="row-posters">
        <button className='btn'>Prev</button>
        {myData.map((anime, index) => {
            return (
                <div className='card'onClick={getDetails(anime.animeTitle)} key={index}>
                    <img className='row-poster' src={anime.animeImg} alt={anime.animeTitle}/>
                    <h3 className='title'>{anime.animeTitle}</h3>
                </div>
            )
        })}
        <button className='btn'>Next</button>
        </motion.div>
    {/* </motion.div> */}
    </div>
  )
}

export default Row