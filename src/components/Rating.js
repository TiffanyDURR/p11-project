import React from "react";

const Rating = ({ count }) => {
  const starsArray = [];

  for (let i = 0; i < count; i += 1) {
    starsArray.push(<i key={`${i}-full`} className="fas fa-star"></i>);
  }

  for (let i = 0; i < 5 - count; i += 1) {
    starsArray.push(
      <i
        key={`${i}-empty`}
        style={{ color: "#E3E3E3" }}
        className="fas fa-star"
      ></i>
    );
  }

  return <div className="rating">{starsArray}</div>;
};

export default Rating;
