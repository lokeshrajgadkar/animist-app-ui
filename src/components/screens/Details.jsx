import React, { useState } from "react";
import requests from '../Requests'

const Details = ({ title }) => {
  const [myData, setMyData] = useState()
  var animeTitle = `${title}`;
  animeTitle = animeTitle.replace(/\s+/g, "-").toLowerCase();
  console.log(animeTitle); // "sonic-free-games"

  useEffect(() => {
      fetchData();
  }, [])  
  

  async function fetchData() {
    try {
      const response = await axios.get(requests.getDetails+`${animeTitle}`);
      setMyData(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  
  return <div>Detail:
    <h1>{myData.animeTitle}</h1>
    <h2>{myData.type}</h2>
    <h3>{myData.releasedDate}</h3>
    <h3>{myData.status}</h3>
    <h3>{myData.otherNames}</h3>
    <h3>{myData.score}</h3>
    <h3>{myData.animeImg}</h3>
    <h3>{myData.totalEpisodes}</h3>
  </div>;
};

export default Details;
