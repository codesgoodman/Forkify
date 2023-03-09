import View from './view.js';
import icons from 'url:../../img/icons.svg';
class PaginationView extends View {
  _parentEl = document.querySelector('.pagination');
  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);
    console.log(this._data);
    console.log(this._data.page);
    // page 1 and there are more pages
    if (this._data.page === 1 && numPages > 1) {
      return `page1 and others`;
    }
    // page 1 and it is the only page

    // last page
    if (this._data.page === numPages && numPages > 1) {
      return `last page`;
    }
    // other pages
    if (this._data.page < numPages) {
      return `other pages`;
    }
    // page 1 and it's the only page
    // return `only 1 page`;
  }
}

export default new PaginationView();
