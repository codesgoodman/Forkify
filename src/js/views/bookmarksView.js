import View from './view.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg';
class BookmarksView extends View {
  _parentEl = document.querySelector('.bookmarks__list');
  _errorMessage =
    'No bookmarks yet! Find a recipe of your preference and bookmark it.';
  _message = '';
  _generateMarkup() {
    return this._data.map(result => previewView.render(result)).join('');
  }
}

export default new BookmarksView();
