import View from './view.js';
import icons from 'url:../../img/icons.svg';
class addRecipeView extends View {
  _parentEl = document.querySelector('.upload');
  _window = document.querySelector('.add-recipe-window');
  _overlay = document.querySelector('.overlay');
  _btnOpen = document.querySelector('.nav__btn--add-recipe');
  _btnClose = document.querySelector('.btn--close-modal');

  addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', function () {
      this._overlay.classList.toggle('.hidden');
      this._window.classList.toggle('.hidden');
    });
  }

  _generateMarkup() {}
}

export default new addRecipeView();
