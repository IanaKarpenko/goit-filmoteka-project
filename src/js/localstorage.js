import refs from './refs.js';

let watchedIds;
let queueIds;

watchedIds = JSON.parse(localStorage.getItem('watched'));
queueIds = JSON.parse(localStorage.getItem('queue'));

if (!watchedIds) {
  watchedIds = [];
  localStorage.setItem('watched', JSON.stringify(watchedIds));
}

if (!queueIds) {
  queueIds = [];
  localStorage.setItem('queue', JSON.stringify(queueIds));
}

const watched = JSON.parse(localStorage.getItem('watched'));
const queue = JSON.parse(localStorage.getItem('queue'));

refs.modal.addEventListener('click', handleClick);

function handleClick(e) {
  if (e.target.classList.value === 'button modal__button modal__button--watched') {
    const id = Number(e.path[3].id);
    const watched = JSON.parse(localStorage.getItem('watched'));

    if (!watched.includes(id)) {
      watchedIds.push(id);
      localStorage.setItem('watched', JSON.stringify(watchedIds));
    }
  }

  if (e.target.classList.value === 'button modal__button modal__button--queue') {
    const id = Number(e.path[3].id);
    const queue = JSON.parse(localStorage.getItem('queue'));

    if (!queue.includes(id)) {
      queueIds.push(id);
      localStorage.setItem('queue', JSON.stringify(queueIds));
    }
  }
}
