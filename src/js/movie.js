import setting from './settings.js';

const { BASE_URL, API_KEY } = setting;

const api = {
  fetchPopular(page = '') {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`;
    return fetch(url).then(rawData => rawData.json());
  },

  fetchByKeyword(page = '', keyword) {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&page=${page}&query=${keyword}`;

    return fetch(url).then(rawData => rawData.json());
  },

  fetchById(id) {
    const url = `${BASE_URL}/movie/${id}?api_key=${API_KEY}`;

    return fetch(url).then(rawData => rawData.json());
  },
};

export default api;
