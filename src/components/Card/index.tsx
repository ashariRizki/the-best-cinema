import React, { useState } from "react";
import { MovieProps } from "../../interfaces/movie";
import Placeholder from "../../assets/placeholder.png";
import ModalDetail from "../ModalDetail";

const Card: React.FC<MovieProps> = (props) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <>
      <div
        onClick={() => setShow(true)}
        className='block shadow-lg rounded-b-xl cursor-pointer relative'>
        <p className='absolute bottom-[4.8rem] left-5 h-[3rem] w-[3rem] flex justify-center items-center border-2 border-[#32a2a8] bg-primary p-2 text-sm text-white font-medium rounded-full'>
          {props.vote_average}
        </p>
        <img
          className='xl:w-[19rem] xl:h-[28rem] lg:w-[18rem] lg:h-[25rem] w-[12rem] h-[15rem] object-cover rounded-t-xl'
          src={
            props.poster_path
              ? process.env.REACT_APP_IMG_URL + props.poster_path
              : Placeholder
          }
          alt={props.title}
        />
        <div className='px-4 py-4 text-center flex flex-col items-center justify-center'>
          <h1 className='text-sm xl:text-lg font-bold max-w-[10rem]'>{props.title}</h1>
          <p className='text-xs xl:text-sm mt-2'>{props.release_date}</p>
        </div>
      </div>
      {show && <ModalDetail id={props.id} show={show} setShow={setShow} />}
    </>
  );
};

export default Card;
