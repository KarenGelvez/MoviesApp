import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {MovieDBMoviesResponse, Movie} from '../interfaces/IMovie';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

export const useMovies = () => {
  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: [],
  });
  const [loading, setloading] = useState(true);

  const getMovies = async () => {
    const nowPlayingPromise = movieDB.get<MovieDBMoviesResponse>(
      '/now_playing',
    );
    const popularPromise = movieDB.get<MovieDBMoviesResponse>('/popular');
    const topRatedPromise = movieDB.get<MovieDBMoviesResponse>('/top_rated');
    const upcomingPromise = movieDB.get<MovieDBMoviesResponse>('/upcoming');

    const resp = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise,
    ]);

    setMoviesState({
      nowPlaying: resp[0].data.results,
      popular: resp[1].data.results,
      topRated: resp[2].data.results,
      upcoming: resp[3].data.results,
    });
    setloading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return {...moviesState, loading};
};
