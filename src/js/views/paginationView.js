import View from './view.js';
import icons from 'url:../../img/icons.svg';
class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');
  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);
    // page 1 and there are more pages
    if (this._data.page === 1 && numPages > 1) {
      return `page1 and others`;
    }
    // page 1 and it is the only page

    // last page
    if (this._data.page === numPages) {
      return `last page`;
    }
    // other pages
  }
}

export default new PaginationView();
