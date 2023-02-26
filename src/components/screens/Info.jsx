import React, { useEffect, useState } from "react";
import axios from "axios";

const Info = () => {
  const url = `https://api.consumet.org/anime/gogoanime/top-airing`;
  const [animes, setAnimes] = useState([]);
  const anime = animes[Math.floor(Math.random() * animes.length)];

  useEffect(() => {
    getData();
  }, []);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  async function getData() {
    try {
      const res = await axios.get(url, { params: { page: 1, type: 2 } });
      console.log(
        "🚀 ~ file: Info.jsx:21 ~ getData ~ res.data:",
        res.data.results
      );
      setAnimes(res.data.results);
    } catch (err) {
      throw new Error(err.message);
    }
  }

  return (
    <>
      <div className="w-full h-[550px] text-white">
        <div className="w-full h-full">
          <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
          <img
            className="w-full h-full object-cover"
            src={`${anime?.image}`}
            alt="{anime?.title}"
          />
        </div>
        <div
          className="absolute w-ful
       top-[20%] p-4 md:p-8"
        >
          <h1 className="text-3xl md:text-5xl font-bold">
            {truncateString(anime?.title, 80)}
          </h1>
          <div className="my-4">
            <button className="border bg-red-300 text-black border-gray-300 py-2 px-5">
              Play
            </button>
            <button className="border text-white ml-4 border-gray-300 py-2 px-5">
              Watch Later
            </button>
          </div>
          {/* <p className="text-grey-400 text-sm">Released: {movie?.release_date}</p>
        <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-grey-200">
          {truncateString(movie?.overview, 150)}
        </p> */}
        </div>
      </div>
    </>
  );
};

export default Info;
