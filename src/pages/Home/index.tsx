import React, { useEffect } from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import { API } from "../../config/api";

const HomePage: React.FC = () => {
  const [movies, setMovies] = React.useState<any[]>([]);

  const getMovies = async () => {
    const res = await API.get(
      `/movie/popular?api_key=779ac0f172ef3f22c3585a35ed6c047f&language=en-US&page=1`
    );
    setMovies(res.data.results);
  };

  console.log(movies);

  useEffect(() => {
    document.title = "The Best Cinema | Home";

    getMovies();
  }, []);

  return (
    <>
      <Header />
      <div className='mx-auto flex max-w-[1400px] flex-wrap mt-4'>
        {movies.map((movie) => (
          <Card
            key={movie.id}
            title={movie.title}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            vote_average={movie.vote_average}
          />
        ))}
      </div>
    </>
  );
};

export default HomePage;
