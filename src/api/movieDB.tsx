import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '1395e89170513a39c04cc289372a5268',
    language: 'en-US',
  },
});

export default movieDB;
