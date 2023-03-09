import View from './view.js';
import icons from 'url:../../img/icons.svg';
class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');
  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );

    // page 1 and there are more pages
    if (curPage === 1 && numPages > 1) {
      return `page1 and others`;
    }
    // page 1 and it is the only page

    // last page
    if (curPage === numPages && numPages > 1) {
      return `<button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}#icon-arrow-left"></use>
      </svg>
      <span>Page ${curPage - 1}</span>
    </button>`;
    }
    // other pages
    if (curPage < numPages) {
      return `other pages`;
    }
    // page 1 and it's the only page
    // return `only 1 page`;
  }
}

export default new PaginationView();
