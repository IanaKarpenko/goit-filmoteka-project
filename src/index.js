import './sass/main.scss';
import refs from './js/refs.js';
import movieApi from './js/movie.js';
import footerModal from './js/footer-modal.js'
import MoviePagination from './js/movie-pagination.js';
const debounce = require('lodash.debounce');
import addMovieToList from './js/localstorage.js';

const movies = new MoviePagination('.movies__list');

if (!movies.keyword) movies.mount();

refs.input.addEventListener(
  'input',
  debounce(({ target: { value } }) => {
    movies.currentPage = 1;
    movies.keyword = value;
    if (!movies.keyword) movies.mount();
    if (movies.keyword) movies.mount();
  }, 1000),
);

refs.pagination.addEventListener('click', getPage);

function getPage() {
  movies.currentPage = Number(document.querySelector('.active').innerText);
  movies.goToPage();
}

// Функтонал кнопок add в модальном окне
// refs.modal.addEventListener('click', addMovieToList);
