import refs from './refs';

let totalPages = 20;
let page = 1;

createPagination(totalPages, page);
window.createPagination = createPagination;
refs.pagination.innerHTML = createPagination(totalPages, page);

function createPagination(totalPages, page) {
  let liTag = '';
  let active;
  let beforePage = page - 1;
  let afterPage = page + 1;

  if (page >= 1) {
    liTag += `<li class="prev pagination__item" onclick="createPagination(${totalPages}, ${
      page - 1
    })">
    <button class="pagination__button-left arrow-btn " type="button" ></button>
    </li>`;
  } else {
    return;
  }

  if (totalPages >= 10) {
    if (page > 3) {
      liTag += `<li class="first numb pagination__item" onclick="createPagination(${totalPages}, 1)">
    <span>1</span>
    </li>`;
    }
    if (page >= 5) {
      liTag += `<li class="pagination__item dots"><span>...</span></li>`;
    }
  }

  if (totalPages < 1) {
    refs.pagination.classList.add('hidden');
  }
  if (totalPages < 10) {
    if (document.documentElement.clientWidth >= 768) {
      if (page < 10) {
        if (page === 1) {
          afterPage = afterPage + 8;
        } else if (page === 2) {
          afterPage = afterPage + 7;
        } else if (page === 3) {
          afterPage = afterPage + 6;
          beforePage = beforePage - 2;
        } else if (page === 4) {
          afterPage = afterPage + 5;
          beforePage = beforePage - 2;
        } else if (page === 5) {
          afterPage = afterPage + 4;
          beforePage = beforePage - 3;
          if (totalPages === page) {
            beforePage = beforePage + 2;
          }
        } else if (page === 6) {
          if (totalPages === page) {
            beforePage = beforePage + 2;
          }
          afterPage = afterPage + 3;
          beforePage = beforePage - 4;
        } else if (page === 7) {
          if (totalPages === page) {
            beforePage = beforePage + 2;
          }
          afterPage = afterPage + 2;
          beforePage = beforePage - 5;
        } else if (page === 8) {
          afterPage = afterPage + 1;
          beforePage = beforePage - 5;
        } else if (page === 9) {
          beforePage = beforePage + 2;
          if (totalPages === 9) {
            beforePage = beforePage - 8;
          }
        }
      }
    }
    if (document.documentElement.clientWidth < 768) {
      if (page === 1) {
        afterPage = afterPage + 3;
        beforePage = beforePage + 1;
      } else if (page === 2) {
        afterPage = afterPage + 2;
      } else if (totalPages === 3) {
        afterPage = afterPage + 2;
        beforePage = beforePage - 2;
      } else if (totalPages === 4) {
        afterPage = afterPage + 2;
        beforePage = beforePage - 2;
      } else if (totalPages === 5) {
        afterPage = afterPage + 1;
        beforePage = beforePage - 1;
      } else if (totalPages === 6) {
        afterPage = afterPage + 1;
        beforePage = beforePage - 1;
      } else if (totalPages === 7) {
        afterPage = afterPage + 1;
        beforePage = beforePage - 1;
      } else if (totalPages === 8) {
        afterPage = afterPage + 1;
        beforePage = beforePage - 1;
      } else if (totalPages === 9) {
        afterPage = afterPage + 1;
        beforePage = beforePage - 1;
      } else if (page > 1) {
        beforePage = beforePage - 1;
      }
    }
    if (totalPages > 4) {
      if (page == totalPages) {
        beforePage = beforePage - 2;
      } else if (page === totalPages - 1) {
        beforePage = beforePage - 1;
      }
    }
  }

  if (totalPages >= 10) {
    if (document.documentElement.clientWidth >= 768) {
      if (page == totalPages) {
        beforePage = beforePage - 5;
      } else if (page === totalPages - 1) {
        beforePage = beforePage - 4;
      } else if (page === totalPages - 2) {
        beforePage = beforePage - 3;
        afterPage = afterPage + 2;
      } else if (page === totalPages - 3) {
        beforePage = beforePage - 2;
        afterPage = afterPage + 2;
      } else if (page === totalPages - 4) {
        beforePage = beforePage - 1;
        afterPage = afterPage + 2;
      } else if (page > 1) {
        beforePage = beforePage - 1;
      }
    }
    if (document.documentElement.clientWidth < 768) {
      if (page == totalPages) {
        beforePage = beforePage - 3;
      } else if (page === totalPages - 1) {
        beforePage = beforePage - 2;
      } else if (page > 1) {
        beforePage = beforePage - 1;
      }
    }

    if (document.documentElement.clientWidth >= 768) {
      if (page === 1) {
        afterPage = afterPage + 5;
      } else if (page < 1) {
        return;
      } else if (page === 2) {
        afterPage = afterPage + 4;
      } else if (page === 3) {
        afterPage = afterPage + 3;
      } else if (page === 4) {
        afterPage = afterPage + 2;
      } else if (page) {
        afterPage = afterPage + 1;
      }
    }
    if (document.documentElement.clientWidth < 768) {
      if (page === 1) {
        afterPage = afterPage + 3;
      } else if (page === 2) {
        afterPage = afterPage + 2;
      } else if (page) {
        afterPage = afterPage + 1;
      }
    }
  }

  for (let plength = beforePage; plength <= afterPage; plength++) {
    if (plength > totalPages) {
      continue;
    }
    if (plength == 0) {
      plength = plength + 1;
    }
    if (page == plength) {
      active = 'active';
    } else {
      active = '';
    }
    liTag += `<li class="numb ${active} pagination__item" onclick="createPagination(${totalPages}, ${plength})">
    <span>${plength}</span>
    </li>`;
  }
  if (totalPages >= 10) {
    if (page < totalPages - 4) {
      liTag += `<li class="dots pagination__item"><span>...</span></li>`;
      liTag += `<li class="last numb pagination__item" onclick="createPagination(${totalPages}, ${totalPages})">
        <span>${totalPages}</span>
        </li>`;
    }
  }
  if (page < totalPages) {
    liTag += `<li class=pagination__item "arrow-btn" onclick="createPagination(${totalPages}, ${
      page + 1
    })">
    <button class="pagination__button-right arrow-btn" type="button"></button>
    </li>`;
  }
  if (page === totalPages) {
    liTag += `<li class="pagination__item arrow-btn">
  <button class="pagination__button-right arrow-btn" type="button"></button>
  </li>`;
  }
  refs.pagination.innerHTML = liTag; //add li tag inside ul tag

  return liTag; //reurn the li tag
}
