import setting from './settings.js';

const { BASE_URL, API_KEY } = setting;

const genres = {
  fetchGenres() {
    return fetch(`${BASE_URL}/genre/movie/list?api_key=${API_KEY}`).then(rawData => rawData.json());
  },
};

export default genres;
