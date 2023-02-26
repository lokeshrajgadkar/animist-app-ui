import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const Video = () => {
  const [myData, setMyData] = useState();
//   useEffect(() => {
//     return () => {
//     //   fetchData();
//     getEp();
//     };
//   }, []);

//   async function fetchData() {
//     try {
//       const response = await axios.get(
//         `https://gogoanime.consumet.stream/vidcdn/watch/naruto-episode-1`
//       );
//       setMyData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   const api = require('gogoanime');
//   function getEp() {
//     return api.animeEpisodeHandler('actors-songs-connection-episode-9')
//     .then(res =>{
//       console.log(res)
//   });
//   }

    const handleChange  = (event) => {
        setMyData(...event.target.value);
    }

  return (
    <div>
      <h1>Video</h1>
      {/* <button onClick={fetchData} className="btn btn-primary">
        Get Ep
      </button> */}
      <div className="video-container">
        {/* <iframe width="560" src='' height="315" allowFullScreen></iframe> */}
        {/* <iframe
          src="vidstreaming.io/streaming.php?id=MTM0NDQ5&title=Actors%3A+Songs+Connection+Episode+9"
          width="100%"
          height="100%"
          frameBorder="0"
          allowFullScreen
        ></iframe> */}
        <input type="text" onChange={handleChange}/>
        <ReactPlayer playing loop volume controls height='480px' url={myData} />
      </div>
    </div>
  );
};

export default Video;
