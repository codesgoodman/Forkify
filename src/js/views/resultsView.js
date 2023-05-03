import View from './view.js';
import icons from 'url:../../img/icons.svg';
class ResultsView extends View {
  _parentEl = document.querySelector('.results');
  _errorMessage = 'No recipes found for your specific query. Please Try again.';
  _message = '';
  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new ResultsView();
