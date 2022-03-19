/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { API } from "../../config/api";
import Placeholder from "../../assets/placeholder.png";
import { MovieDetailProps } from "../../interfaces/movieDetail";

const ModalDetail: React.FC<MovieDetailProps> = (props) => {
  const [movieDetail, setMovieDetail] = useState(props);

  const getMovieDetail = async () => {
    const res = await API.get(
      `/movie/${props.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setMovieDetail(res.data);
  };

  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <>
      <div onClick={() => props.setShow(!props.show)} className='modal'></div>
      <div className='modal--content flex gap-4'>
        <img
          className='xl:w-[19rem] lg:w-[18rem] w-[12rem] h-full object-cover rounded-xl'
          src={
            movieDetail.poster_path
              ? process.env.REACT_APP_IMG_URL + movieDetail.poster_path
              : Placeholder
          }
          alt={movieDetail.title}
        />
        <div>
          <h3 className='mb-4 font-bold text-lg xl:text-2xl lg:text-xl'>
            {movieDetail.title}
          </h3>
          <div className='flex gap-4 items-center mb-4'>
            <p className='h-[3rem] w-[3rem] flex justify-center items-center border-2 border-[#32a2a8] bg-primary p-2 text-sm text-white font-medium rounded-full'>
              {movieDetail.vote_average}
            </p>
            <p className='text-sm text-gray-600'>
              {movieDetail.genres?.map((genre) => genre.name).join(", ")}
            </p>
          </div>
          <p className='text-sm text-gray-600'>{movieDetail.tagline}</p>
          <h3 className='font-bold mb-2'>Overview</h3>
          <p className='text-gray-600 text-sm'>{movieDetail.overview}</p>
        </div>
      </div>
    </>
  );
};

export default ModalDetail;
