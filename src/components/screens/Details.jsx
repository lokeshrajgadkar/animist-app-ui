import React from "react";

const Details = ({ title }) => {
  var str = `${title}`;
  str = str.replace(/\s+/g, "-").toLowerCase();
  console.log(str); // "sonic-free-games"

  
  return <div>Detail: {title}</div>;
};

export default Details;
