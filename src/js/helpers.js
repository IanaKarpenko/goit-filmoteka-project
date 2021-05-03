import settings from './settings.js';
import genresData from './genreData.js';
const { POSTER_URL } = settings;

export const generatePosterPath = imageName => `${POSTER_URL}${imageName}`;

export const convertGenre = ids => {
  let genreNames = [];

  ids.forEach(id => {
    const genre = genresData.find(item => item.id === parseInt(id));
    genreNames.push(genre.name);
  });

  return genreNames.join(', ');
};

export const parseLocalStorage = {
  queueKey: 'queueMovies',
  watchedKey: 'watchedMovies',

  get queueArray() {
    return JSON.parse(localStorage.getItem(this.queueKey));
  },

  get watchedArray() {
    return JSON.parse(localStorage.getItem(this.watchedKey));
  },
};

// export const setItemLS = (key, value) => {
//   localStorage.setItem(key, JSON.stringify(value));
// };

// export const getItemLS = key => {
//   return JSON.parse(localStorage.getItem(key));
// };
