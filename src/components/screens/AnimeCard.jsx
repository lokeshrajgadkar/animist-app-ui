import React from 'react'
import Details from './Details';

const AnimeCard = ({ item }) => {

    const truncateString = (str, num) => {
        if (str?.length > num) {
          return str.slice(0, num) + "...";
        } else {
          return str;
        }
      };

  return (
    <div className="w-[130px] sm:w-[210px] lg:w-[220px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block"
        src={`${item?.animeImg}`}
        alt={item?.animeTitle}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p
          className="white-space-normal text-xs md:text-sm font-bol
                    flex justify-center items-center h-full text-center"
        >
            {truncateString(item?.animeTitle, 30)}
        </p>
        <p className="text-xs md:text-sm flex justify-center items-center
                    text-center"><a href={<Details title={item?.animeTitle} />}>More..</a></p>
      </div>
      {/* <p>
        {like ? (
          <FaHeart className="absolute top-4 left-4 text-gray-300" />
        ) : (
          <FaRegHeart className="absolute top-4 left-4 text-gray-300" />
        )}
      </p> */}
    </div>
  )
}

export default AnimeCard