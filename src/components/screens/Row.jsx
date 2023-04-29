import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Row.css";
import Details from "./Details";
import AnimeInfo from "./AnimeInfo";
import AnimeCard from "./AnimeCard";
// import { BrowserRouter as Router, Switch, Route, Link  } from 'react-router-dom'

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  // const dataFetchedRef = useRef(false);
  const [myData, setMyData] = useState([]);
  const [width, setWidth] = useState(0);
  // const row = useRef();

  useEffect(() => {
    // if (dataFetchedRef.current) return;
    // dataFetchedRef.current = true;
    //     console.log(row.current.scrollWidth - row.current.scrollWidth);
    //  setWidth(row.current.scrollWidth + row.current.scrollWidth)
    // fetchData();
    try {
      axios.get(fetchUrl)
      .then((res) => {
          setMyData(res.data);
        });
    } catch (err) {
      throw new Error(err.message);
    }
  }, []);

  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>  
      <div className="relative flex items-center">
        <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap 
        scroll-smooth scrollbar-hide relative'>
            {myData.map((anime, id) => (
                <AnimeCard key={id} item={anime}/>
            ))}
        </div>
      </div>
    </>
  );
};

export default Row;
