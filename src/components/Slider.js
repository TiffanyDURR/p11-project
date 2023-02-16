import React, { useEffect, useState } from "react";
import axios from "axios";

const Slider = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("data.json").then((res) => setData(res.data));
  }, []);
  return (
    <div className="cards">
      {data.map((card) => (
        <img src={card.pictures[0]} alt={card.title}></img>
      ))}
    </div>
  );
};

export default Slider;
