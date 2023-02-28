class SearchView {
  #parentEl = document.querySelector('.search');
<<<<<<< HEAD
  getQuery() {
    return this.#parentEl.querySelector('.search__field').value;
  }
  clearInput() {
    // this.#parentEl.querySelector('.search__field').value = '';
  }
  addHandlerSearch(handler) {
    this.#parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
=======
>>>>>>> parent of 9570e4a (add getQuery method and import into controller.js)
}

export default new SearchView();
