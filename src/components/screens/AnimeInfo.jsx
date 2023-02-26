import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Requests";
import "./AnimeInfo.css";
const AnimeInfo = ({ atitle }) => {
  const [myData, setMyData] = useState("");
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [status, setStatus] = useState("");
  const [episodes, setEpisodes] = useState("");
  const [image, setImage] = useState("");
  const [epList, setEpList] = useState([]);
  var animeTitle = "";
  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get(
        `https://gogoanime.consumet.stream/anime-details/hyouka`
      );
      setMyData(response.data);
      setTitle(response.data.animeTitle);
      setDetails(response.data.synopsis);
      setStatus(response.data.status);
      setImage(response.data.animeImg);
      setEpList(response.data.episodesList);
      console.log(
        "🚀 ~ file: AnimeInfo.jsx:28 ~ fetchData ~ setEpList",
        setEpList
      );
      console.log(
        "🚀 ~ file: AnimeInfo.jsx:20 ~ fetchData ~ setMyData",
        setMyData
      );
    } catch (error) {
      console.error(error);
    }
    return setMyData(myData);
  }

  return (
    <div className="container">
      <div className="row-1">
        <div className="cover">
          <img className="image" src={image} alt="" />
        </div>
        <div className="info">
          <h3>Name: {title}</h3>
          {/* <h3>Type: {title}</h3> */}
          <h3>Status: {status}</h3>
          <h3>Episodes: Anime Episodes</h3>
          <h3>Score: Anime Score</h3>
          <p>Details: {details}</p>
        </div>
      </div>
      <div className="row-2">
        {epList.map((epListItem) => {
          return (
            <div key={epListItem.id}>
              <h3>Episode: {epListItem.episodeNum}</h3>
              <h3>Url: {epListItem.episodeUrl}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimeInfo;
