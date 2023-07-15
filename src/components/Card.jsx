import React from "react";

const Card = ({ props }) => {
  const { name, liked, src, year } = props;
  return (
    <div className="card">
      <div className="top">
        <h2>{name}</h2>
        <img src={src} alt={name} />
      </div>
      <div className="bottom">
        <p>{liked}</p>
        <p>{year}</p>
      </div>
    </div>
  );
};

export default Card;
