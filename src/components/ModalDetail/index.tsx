/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { API } from "../../config/api";
import Placeholder from "../../assets/placeholder.png";
import { MovieDetailProps } from "../../interfaces/movieDetail";

const ModalDetail: React.FC<MovieDetailProps> = (props) => {
  const [movieDetail, setMovieDetail] = useState(props);
  const [session, setSession] = useState<string>("");

  const getSession = async () => {
    const res = await API.get(
      `/authentication/guest_session/new?api_key=${process.env.REACT_APP_API_KEY}`
    );

    setSession(res.data.guest_session_id);
  };

  const getMovieDetail = async () => {
    const res = await API.get(
      `/movie/${props.id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );

    setMovieDetail(res.data);
  };

  useEffect(() => {
    getMovieDetail();
    getSession();
  }, []);

  return (
    <>
      <div onClick={() => props.setShow(!props.show)} className='modal'></div>
      <div className='modal--content flex gap-4 xl:gap-x-12 lg:gap-8 xl:flex-row lg:flex-row md:flex-row flex-col '>
        <img
          className='xl:w-[22rem] lg:w-[20rem] md:w-[18rem] w-full h-full  object-cover rounded-xl'
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
          <div className='flex gap-4 items-center my-4'>
            <p className='h-[3rem] w-[3rem] flex justify-center items-center border-2 border-[#32a2a8] bg-primary p-2 text-sm text-white font-medium rounded-full'>
              {movieDetail.vote_average}
            </p>
            <p className='text-sm xl:text-xl text-gray-600'>
              {movieDetail.genres?.map((genre) => genre.name).join(", ")}
            </p>
          </div>
          <p className='text-sm text-gray-600 mt-4 mb-6'>{movieDetail.tagline}</p>
          <h3 className='font-bold mb-2 text-lg xl:text-xl'>Overview</h3>
          <p className='text-gray-600 text-sm xl:text-lg'>{movieDetail.overview}</p>
        </div>
      </div>
    </>
  );
};

export default ModalDetail;
