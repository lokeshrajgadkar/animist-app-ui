// import React, { useEffect, useRef, useState } from "react";
// import "./Popular.css";
// import { motion } from "framer-motion";
// import axios from "axios";
// import requests from "../Requests";

// const Popular = () => {
//   const [myData, setMyData] = useState([]);
//   const [width, setWidth] = useState(0);
//   const dataFetchedRef = useRef(false);
//   const carousel = useRef();

//   useEffect(() => {
//     if (dataFetchedRef.current) return;
//     dataFetchedRef.current = true;
//     console.log(carousel.current.scrollWidth - carousel.current.scrollWidth);
//     setWidth(carousel.current.scrollWidth - carousel.current.scrollWidth)
//     getUser();
    
//   }, []);

//   async function getUser() {
//     try {
//       const response = await axios.get(requests.getPopular);
//       console.log(response.data);
//       setMyData(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   return (
//     <>
//       <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
//         <motion.div
//           drag="x"
//           dragConstraints={{right: 0, left:-width}}
//           className="inner-carousel"
//         >
//           {myData.map((anime, id) => {
//             return (
//               <motion.div 
//               animate={{ x: [30, 100, 30]}}
//               className="card" key={id}>
//                 <img src={anime.animeImg} alt={anime.animeTitle} />
//                 <motion.div className="card-body">
//                   <motion.h5 className="card-title">
//                     {anime.animeTitle}
//                   </motion.h5>
//                   <motion.p className="card-text">
//                     {anime.releasedDate}
//                   </motion.p>
//                 </motion.div>
//               </motion.div>
//             );
//           })}
//         </motion.div>
//       </motion.div>
//     </>
//   );
// };

// export default Popular;
