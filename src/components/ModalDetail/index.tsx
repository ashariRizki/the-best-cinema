/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { API } from "../../config/api";
import Placeholder from "../../assets/placeholder.png";
import { MovieDetailProps } from "../../interfaces/movieDetail";
import Loading from "../Loading";

const ModalDetail: React.FC<MovieDetailProps> = (props) => {
  const [movieDetail, setMovieDetail] = useState(props);
  const [rate, setRate] = useState<number>(0);
  const [session, setSession] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isFailed, setIsFailed] = useState<boolean>(false);

  const [message, setMessage] = useState<string>("");

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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      if (rate >= 0.5 && rate <= 10) {
        await API.post(
          `/movie/${props.id}/rating?api_key=${process.env.REACT_APP_API_KEY}&guest_session_id=${session}`,
          {
            value: rate,
          }
        );
        setIsLoading(false);
        setIsSuccess(true);
        setMessage("Successfully rated");
        setTimeout(() => {
          props.setShow(!props.show);
        }, 1500);
      } else {
        setIsSuccess(false);
        setIsFailed(true);
        setIsLoading(false);
        setMessage("Rate must be between 0.5 and 10");
        setTimeout(() => {
          setIsFailed(false);
        }, 1000);
        setTimeout(() => {
          setMessage("");
        }, 1000);
      }
    } catch (error: any) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div onClick={() => props.setShow(!props.show)} className='modal'></div>
      <div className='modal--content h-full'>
        <div className='relative w-full'>
          {isSuccess ? (
            <p
              className={`mb-4 ${
                isSuccess
                  ? "left-[20%] xl:left[50%] lg:left-[50%] top-[80%] translate-y-[-50%] xl:top-[50%] lg:top-[50%] translate-x-[-50%] bg-green-500"
                  : "left-[-100rem]"
              } fixed text-white px-4 py-2 rounded z-50 max-h-fit`}>
              {message}
            </p>
          ) : (
            <p
              className={`mb-4 ${
                isFailed
                  ? "left-[20%] xl:left[50%] lg:left-[50%] top-[80%] translate-y-[-50%] xl:top-[50%] lg:top-[50%] bg-red-500"
                  : "left-[-100rem]"
              } fixed text-white px-4 py-2 rounded z-50 max-h-fit`}>
              {message}
            </p>
          )}
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <div className='h-full flex gap-4 xl:gap-x-12 lg:gap-8 xl:flex-row lg:flex-row md:flex-row flex-col'>
            <img
              className='xl:w-[22rem] lg:w-[20rem] md:h-full lg:h-full xl:h-full md:w-[18rem] w-full h-[20rem]  object-cover rounded-xl'
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
              <form
                onSubmit={(e) => handleSubmit(e)}
                className='flex items-center mt-4 mb-4'>
                <div className='relative pt-1'>
                  <label htmlFor='rate' className='form-label'>
                    Rate
                  </label>
                  <p className='flex justify-center items-center'>{rate}</p>
                  <input
                    name='value'
                    onChange={(e) => setRate(e.target.valueAsNumber)}
                    type='range'
                    className='form-range w-full h-6 p-0 bg-white'
                    min='0'
                    max='10'
                    id='rate'
                  />
                </div>
                <button
                  type='submit'
                  className='text-sm xl:text-lg bg-primary text-white lg:text-base px-2 rounded-lg xl:mt-4 lg:mt-12 ml-2 py-1 mt-10'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ModalDetail;
