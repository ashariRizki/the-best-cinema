/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import Loading from "../../components/Loading";
import { API } from "../../config/api";

const HomePage: React.FC = () => {
  const [movies, setMovies] = useState<any[]>([]);
  const [moviesSearch, setMoviesSearch] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [search, setSearch] = useState<string>("");

  const getMovies = async (search: any) => {
    setIsLoading(true);
    let res: any;
    if (search) {
      res = await API.get(
        `/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&include_adult=false&query=${search}`
      );
      setMoviesSearch(res.data.results);
    } else {
      res = await API.get(
        `/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );
      setMovies(res.data.results);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    document.title = "The Best Cinema | Home";

    getMovies(search);
  }, [search]);

  return (
    <>
      <Header search={search} setSearch={setSearch} />
      <div className='mx-auto flex max-w-[1400px] flex-wrap mt-4 lg:px-4 xl:px-0 px-4'>
        <p className='mt-2 mb-4 font-bold text-lg'>Home</p>
        {isLoading ? (
          <Loading />
        ) : (
          <div className='flex flex-wrap gap-8 mb-8'>
            {search
              ? moviesSearch.map((movie) => (
                  <Card
                    id={movie.id}
                    key={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                    release_date={movie.release_date}
                    vote_average={movie.vote_average}
                  />
                ))
              : movies.map((movie) => (
                  <Card
                    id={movie.id}
                    key={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                    release_date={movie.release_date}
                    vote_average={movie.vote_average}
                  />
                ))}
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
