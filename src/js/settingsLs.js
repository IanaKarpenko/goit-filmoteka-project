const lS = {
  queueKey: 'queueMovies',
  watchedKey: 'watchedMovies',

  get queueArray() {
    return JSON.parse(localStorage.getItem(this.queueKey));
  },

  get watchedArray() {
    return JSON.parse(localStorage.getItem(this.watchedKey));
  },
};

export default lS;
