import * as model from './model.js';
import recipeView from './views/recipeView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import 'core-js/stable'; // polyfilling in general
import 'regenerator-runtime/runtime'; //polyfilling async await
if (module.hot) {
  module.hot.accept();
}
// import { search } from 'core-js/fn/symbol';

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
    // Testing
    controlServings();
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();
    // 1) get search query
    const query = searchView.getQuery();
    if (!query) return;
    // 2) Load search result
    await model.loadSearchResults(query);
    // 3) render results
    resultsView.render(model.getSearchResultsPage(1));
    // 4) render initial pagination
    paginationView.render(model.state.search);
  } catch (err) {
    console.error(err);
  }
};

const controlPagination = function (goToPage) {
  // 1) render new results
  resultsView.render(model.getSearchResultsPage(goToPage));
  // 2) render new pagination buttons
  paginationView.render(model.state.search);
};

const controlServings = function () {
  // update the recipe servings (in state)
  model.updateServings(6);
  // update recipe view
  recipeView.render(model.state.recipe);
};
// window.addEventListener('hashchange', controlRecipes);
// window.addEventListener('load', controlRecipes);
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
  paginationView.addHandlerClick(controlPagination);
};
init();
