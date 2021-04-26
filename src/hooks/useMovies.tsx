import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieDBNowPlaying, Movie} from '../interfaces/IMovie';

export const useMovies = () => {
  const [moviesNowCinema, setmoviesNowCinema] = useState<Movie[]>([]);
  const [loading, setloading] = useState(true);
  const getMovies = async () => {
    const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    const movies = resp.data.results;
    setmoviesNowCinema(movies);
    setloading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return {moviesNowCinema, loading};
};
