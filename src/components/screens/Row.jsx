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
  const row = useRef();

  useEffect(() => {
    // if (dataFetchedRef.current) return;
    // dataFetchedRef.current = true;
    //     console.log(row.current.scrollWidth - row.current.scrollWidth);
    //  setWidth(row.current.scrollWidth + row.current.scrollWidth)
    fetchData();
  }, []);

  async function fetchData() {

    try {
      const res = await axios.get(fetchUrl);
      console.log(
        "🚀 ~ file: Info.jsx:21 ~ getData ~ res.data:",
        res.data.results
      );
      setMyData(res.data.results);
    } catch (err) {
      throw new Error(err.message);
    }
    // try {
    //   const response = await axios.get(fetchUrl);
    //   setMyData(response.data.results);
    //   console.log("🚀 ~ file: Row.jsx:30 ~ fetchData ~ setMyData:", setMyData)
    // } catch (error) {
    //   console.error(error);
    // }
  }
  // const getDetails = (title) => {
  //   // console.log("🚀 ~ file: Row.jsx:30 ~ getDetails ~ title", title);
  //   // return history.push("/listDetail/" + id);
  //   return <Details title={title} />;
  // };

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
    // <div className="row" style={{ cursor: "grabbing" }}>
    //   {/* <motion.div drag="x" className='inner-row'> */}
    //   <h2>{title}</h2>
    //   <motion.div className="row-posters">
    //     <button className="btn">Prev</button>
    //     {myData.map((anime, index) => {
    //       return (
    //         <div
    //           className="card"
    //           onClick={() => getDetails(anime.animeTitle)}
    //           key={index}
    //         >
    //           <img
    //             className="row-poster"
    //             src={anime.animeImg}
    //             alt={anime.animeTitle}
    //           />
    //           <h3 className="title">{anime.animeTitle}</h3>
    //           <a style={{color:"yellow"}} href="/Details">
    //             <AnimeInfo title={anime.animeTitle} />
    //           </a>
    //         </div>
    //       );
    //     })}
    //     <button className="btn">Next</button>
    //   </motion.div>
    //   {/* </motion.div> */}
    // </div>
  );
};

export default Row;
