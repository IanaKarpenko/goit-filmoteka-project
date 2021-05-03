import modalCard from '../templates/modal.hbs';
import settings from './settings';
import refs from './refs';
const { BASE_URL, API_KEY } = settings;

const modal = {
  modalOpen() {
    const listCard = document.querySelectorAll('.movies__card');
    listCard.forEach(e => {
      e.addEventListener('click', this.open);
    });
  },

  open(e) {
    const idFilm = e.currentTarget.id;

    fetchFilm().then(r => {
      const markup = modalCard(r);
      refs.modal.innerHTML = markup;
      modalClose();
    });

    function fetchFilm() {
      return fetch(`${BASE_URL}/movie/${idFilm}?api_key=${API_KEY}`).then(r => {
        return r.json();
      });
    }
  },
};

function modalClose() {
  const closeIcon = document.querySelector('.modal__close-icon');
  const backdropRef = document.querySelector('.backdrop');
  closeIcon.addEventListener('click', close);
  function close() {
    backdropRef.classList.add('visually-hidden');
  }
  window.addEventListener('keydown', closeModalKey);
  function closeModalKey(event) {
    if (event.code === 'Escape') {
      backdropRef.classList.add('visually-hidden');
    }
  }
  backdropRef.addEventListener('click', closeModalBack);
  function closeModalBack(e) {
    if (e.target.classList.value === 'backdrop') {
      backdropRef.classList.add('visually-hidden');
    }
    return;
  }
}

export default modal;
