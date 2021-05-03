import './sass/my-library.scss';
import refs from './js/refs.js';
import movieApi from './js/movie.js';
import MoviePagination from './js/movie-pagination.js';
import addMovieToList from './js/localstorage.js';
import settings from './js/settings';
const { BASE_URL, API_KEY } = settings;

const movies = new MoviePagination('.movies__list');

refs.btnW.addEventListener('click', handleBtnW);

function handleBtnW() {
  const watchedIds = JSON.parse(localStorage.getItem('watched'));
  // const queueIds = JSON.parse(localStorage.getItem('queue'));
}
