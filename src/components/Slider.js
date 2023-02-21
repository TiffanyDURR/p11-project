import React, { useEffect, useState } from "react";

const Slider = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
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
