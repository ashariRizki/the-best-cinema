import React from "react";

interface CardProps {
  title: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}

const Card: React.FC<CardProps> = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <img src={process.env.REACT_APP_IMG_URL + props.poster_path} alt={props.title} />
      <p>{props.release_date}</p>
    </div>
  );
};

export default Card;
