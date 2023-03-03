import React from 'react'

const AnimeCard = ({ item }) => {

    const truncateString = (str, num) => {
        if (str?.length > num) {
          return str.slice(0, num) + "...";
        } else {
          return str;
        }
      };

  return (
    <div className="w-[10px] sm:w-[200px] lg:w-[220px] inline-block cursor-pointer relative p-2">
      <img
        className="w-full h-auto block"
        src={`${item?.image}`}
        alt={item?.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p
          className="white-space-normal text-xs md:text-sm font-bol
                    flex justify-center items-center h-full text-center"
        >
            {truncateString(item?.title, 30)}
        </p>
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