import * as model from './model.js';
import recipeView from './views/recipeView.js';
import 'core-js/stable'; // polyfilling in general
import 'regenerator-runtime/runtime'; //polyfilling async await
// import { search } from 'core-js/fn/symbol';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();
    // 1. Loading recipe
    await model.loadRecipe(id);

    // 2. Rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
<<<<<<< HEAD
    const query = searchView.getQuery();
    if (!query) return;
    await model.loadSearchResults(query);
=======
    await model.loadSearchResults('pizza');
>>>>>>> parent of 9570e4a (add getQuery method and import into controller.js)
    console.log(model.state.search.results);
  } catch (err) {
    console.error(err);
  }
};
controlSearchResults();
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};
init();
