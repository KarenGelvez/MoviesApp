import {useEffect, useState} from 'react';
import movieDB from '../api/movieDB';
import {FullMovie} from '../interfaces/IMovie';
import {Credits, Cast} from '../interfaces/ICredits';

interface MovieDeatils {
  isLoading: boolean;
  fullMovie?: FullMovie;
  cast?: Cast[];
}

export const useMoviesDetails = (movieId: number) => {
  const [detailsState, setMoviesState] = useState<MovieDeatils>({
    isLoading: true,
    fullMovie: undefined,
    cast: [],
  });

  const getMovieDetails = async () => {
    const movieDetails = await movieDB.get<FullMovie>(`/${movieId}`);
    const movieCredits = await movieDB.get<Credits>(`/${movieId}/credits`);
    const [movieDetailsRes, movieCreditsRes] = await Promise.all([
      movieDetails,
      movieCredits,
    ]);
    setMoviesState({
      isLoading: false,
      fullMovie: movieDetailsRes.data,
      cast: movieCreditsRes.data.cast,
    });
  };

  useEffect(() => {
    getMovieDetails();
  }, []);
  return {...detailsState};
};
